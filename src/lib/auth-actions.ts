"use server";

import { signOut as nextAuthSignOut } from "@/auth";
import { verifyCsrfToken } from "@/lib/csrf";
import { logAuditEvent, auditEvents } from "@/lib/audit";
import { getCurrentUser } from "@/lib/auth";

export async function signOutAction() {
  // Verify CSRF token
  if (!(await verifyCsrfToken())) {
    console.error("Sign out blocked: Invalid request origin");
    throw new Error("Invalid request origin");
  }

  // Log the logout event
  try {
    const user = await getCurrentUser();
    if (user?.id) {
      await logAuditEvent(user.id, auditEvents.LOGOUT, {
        email: user.email,
      });
    }
  } catch (error) {
    console.error("Failed to log logout event:", error);
    // Continue with logout even if logging fails
  }

  await nextAuthSignOut({ redirectTo: "/sign-in" });
}
