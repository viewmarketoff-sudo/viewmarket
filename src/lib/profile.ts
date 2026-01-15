import "server-only";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

function getSupabaseClient() {
  if (!supabase) {
    supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
  }
  return supabase;
}

interface ProfileData {
  authUserId: string;
  email: string | null | undefined;
  name: string | null | undefined;
  avatarUrl: string | null | undefined;
  provider: string;
  providerId: string;
}

export async function upsertProfile(data: ProfileData) {
  const { error } = await getSupabaseClient()
    .from("profiles")
    .upsert(
      {
        auth_user_id: data.authUserId,
        email: data.email ?? null,
        name: data.name ?? null,
        avatar_url: data.avatarUrl ?? null,
        provider: data.provider,
        provider_id: data.providerId,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "provider,provider_id",
        ignoreDuplicates: false,
      },
    );

  if (error) throw error;
}

export async function getProfileByAuthUserId(authUserId: string) {
  const { data, error } = await getSupabaseClient()
    .from("profiles")
    .select("*")
    .eq("auth_user_id", authUserId)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data;
}
