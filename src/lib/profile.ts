import "server-only";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

import { AuthError } from "@/lib/errors";

let supabaseClient: SupabaseClient | null = null;
let supabaseAdminClient: SupabaseClient | null = null;

// Use anon key for regular operations (RLS enforced)
function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
  }
  return supabaseClient;
}

// Use service role ONLY for admin operations (auth.users table)
function getSupabaseAdminClient() {
  if (!supabaseAdminClient) {
    supabaseAdminClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
  }
  return supabaseAdminClient;
}

interface ProfileData {
  authUserId: string;
  email: string | null | undefined;
  name: string | null | undefined;
  avatarUrl: string | null | undefined;
  provider: string;
  providerId: string;
}

async function ensureSupabaseUser(
  email: string | null | undefined,
  adminClient: SupabaseClient,
): Promise<string> {
  if (!email) {
    throw new AuthError(
      "Email is required to ensure Supabase user",
      "EMAIL_REQUIRED",
      400,
    );
  }

  console.log("[ensureSupabaseUser] Checking for email:", email);

  // Check if user already exists with this exact email
  const { data: existing, error: listError } =
    await adminClient.auth.admin.listUsers({
      page: 1,
      perPage: 1000, // Increase to get all users
    });

  if (listError) {
    console.error("Failed to list users:", listError);
    throw new AuthError(
      "Failed to check existing user",
      "USER_CHECK_FAILED",
      500,
    );
  }

  // Find user with exact email match
  const existingUser = existing?.users?.find((u) => u.email === email);

  if (existingUser?.id) {
    console.log(
      "[ensureSupabaseUser] Found existing user:",
      existingUser.id,
      "for email:",
      email,
    );
    return existingUser.id;
  }

  console.log(
    "[ensureSupabaseUser] No existing user found, creating new user for:",
    email,
  );

  // Create new user with idempotent approach
  const { data: created, error: createError } =
    await adminClient.auth.admin.createUser({
      email,
      email_confirm: true,
    });

  if (createError) {
    console.error("[ensureSupabaseUser] Create error:", createError);

    // Handle race condition - user was created between check and create
    if (createError.status === 422 || createError.code === "email_exists") {
      console.log(
        "[ensureSupabaseUser] Race condition detected, retrying fetch",
      );

      const { data: retry } = await adminClient.auth.admin.listUsers({
        page: 1,
        perPage: 1000,
      });

      const retryUser = retry?.users?.find((u) => u.email === email);
      if (retryUser?.id) {
        console.log("[ensureSupabaseUser] Found user on retry:", retryUser.id);
        return retryUser.id;
      }

      throw new AuthError(
        "User already exists but could not be retrieved",
        "USER_RETRIEVAL_FAILED",
        500,
      );
    }

    throw new AuthError(
      `Failed to create user: ${createError.message}`,
      "USER_CREATE_FAILED",
      500,
    );
  }

  if (!created.user?.id) {
    throw new AuthError(
      "User creation returned no ID",
      "USER_CREATE_NO_ID",
      500,
    );
  }

  console.log(
    "[ensureSupabaseUser] Created new user:",
    created.user.id,
    "for email:",
    email,
  );
  return created.user.id;
}

export async function upsertProfile(data: ProfileData) {
  try {
    console.log("[upsertProfile] Starting with data:", {
      authUserId: data.authUserId,
      email: data.email,
      provider: data.provider,
      provider_id: data.providerId,
    });

    // IMPORTANT: We use admin client (service role) for profile upsert during OAuth sign-in
    // because the user isn't authenticated yet when NextAuth calls this function.
    // The RLS policies require auth.uid() = auth_user_id, but auth.uid() is null during sign-in.
    // This is safe because:
    // 1. Only called from server-side NextAuth callback (not exposed to client)
    // 2. We validate the OAuth provider's response before calling this
    // 3. We ensure the auth_user_id matches the Supabase user we just created
    const adminClient = getSupabaseAdminClient();
    const supabaseUserId = await ensureSupabaseUser(data.email, adminClient);

    console.log("[upsertProfile] Got Supabase user ID:", supabaseUserId);

    // Use admin client for profile upsert (bypasses RLS during sign-in)
    const { error } = await adminClient.from("profiles").upsert(
      {
        auth_user_id: supabaseUserId,
        email: data.email ?? null,
        name: data.name ?? null,
        avatar_url: data.avatarUrl ?? null,
        provider: data.provider,
        provider_id: data.providerId,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "auth_user_id",
        ignoreDuplicates: false,
      },
    );

    if (error) {
      console.error("Profile upsert failed:", error);
      throw new AuthError(
        "Failed to update profile",
        "PROFILE_UPDATE_FAILED",
        500,
      );
    }

    console.log(
      "[upsertProfile] Successfully upserted profile for user:",
      supabaseUserId,
    );
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
    console.error("Unexpected error in upsertProfile:", error);
    throw new AuthError("An unexpected error occurred", "INTERNAL_ERROR", 500);
  }
}

export async function getProfileByAuthUserId(authUserId: string) {
  try {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from("profiles")
      .select("*")
      .eq("auth_user_id", authUserId)
      .is("deleted_at", null)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Failed to get profile:", error);
      throw new AuthError(
        "Failed to retrieve profile",
        "PROFILE_RETRIEVAL_FAILED",
        500,
      );
    }

    return data;
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
    console.error("Unexpected error in getProfileByAuthUserId:", error);
    throw new AuthError("An unexpected error occurred", "INTERNAL_ERROR", 500);
  }
}

export async function getProfileByEmail(email: string) {
  try {
    const adminClient = getSupabaseAdminClient();
    const { data, error } = await adminClient
      .from("profiles")
      .select("*")
      .eq("email", email)
      .is("deleted_at", null)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Failed to get profile by email:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Unexpected error in getProfileByEmail:", error);
    return null;
  }
}

export async function softDeleteProfile(authUserId: string) {
  try {
    const client = getSupabaseClient();
    const { error } = await client
      .from("profiles")
      .update({ deleted_at: new Date().toISOString() })
      .eq("auth_user_id", authUserId);

    if (error) {
      console.error("Failed to soft delete profile:", error);
      throw new AuthError(
        "Failed to delete profile",
        "PROFILE_DELETE_FAILED",
        500,
      );
    }
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
    console.error("Unexpected error in softDeleteProfile:", error);
    throw new AuthError("An unexpected error occurred", "INTERNAL_ERROR", 500);
  }
}
