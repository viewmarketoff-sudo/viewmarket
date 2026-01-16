import "server-only";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";

async function getSupabaseAdminClient() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}

export async function logAuditEvent(
  authUserId: string | null,
  eventType: string,
  eventData: Record<string, any>,
) {
  try {
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    const realIp = headersList.get("x-real-ip");
    const ip = forwarded?.split(",")[0].trim() || realIp || "unknown";
    const userAgent = headersList.get("user-agent") || "unknown";

    const admin = await getSupabaseAdminClient();

    await admin.from("audit_logs").insert({
      auth_user_id: authUserId,
      event_type: eventType,
      event_data: eventData,
      ip_address: ip,
      user_agent: userAgent,
    });
  } catch (error) {
    // Don't throw - audit logging should not break the main flow
    console.error("Failed to log audit event:", error);
  }
}

export const auditEvents = {
  LOGIN_SUCCESS: "login_success",
  LOGIN_FAILED: "login_failed",
  LOGIN_RATE_LIMITED: "login_rate_limited",
  LOGOUT: "logout",
  PROFILE_CREATED: "profile_created",
  PROFILE_UPDATED: "profile_updated",
  PROFILE_DELETED: "profile_deleted",
  EMAIL_NOT_VERIFIED: "email_not_verified",
  ACCOUNT_LINKING_DETECTED: "account_linking_detected",
} as const;
