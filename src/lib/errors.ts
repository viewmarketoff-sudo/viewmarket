export class AuthError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
  ) {
    super(message);
    this.name = "AuthError";
  }
}

export const authErrors = {
  UNAUTHORIZED: new AuthError("Unauthorized", "UNAUTHORIZED", 401),
  FORBIDDEN: new AuthError("Forbidden", "FORBIDDEN", 403),
  RATE_LIMITED: new AuthError("Too many requests", "RATE_LIMITED", 429),
  PROFILE_NOT_FOUND: new AuthError(
    "Profile not found",
    "PROFILE_NOT_FOUND",
    404,
  ),
  PROFILE_UPDATE_FAILED: new AuthError(
    "Failed to update profile",
    "PROFILE_UPDATE_FAILED",
    500,
  ),
  EMAIL_NOT_VERIFIED: new AuthError(
    "Email not verified",
    "EMAIL_NOT_VERIFIED",
    403,
  ),
  ACCOUNT_LINKING_REQUIRED: new AuthError(
    "Account linking required",
    "ACCOUNT_LINKING_REQUIRED",
    409,
  ),
} as const;

export function handleAuthError(error: unknown): never {
  if (error instanceof AuthError) {
    throw error;
  }

  console.error("Unexpected auth error:", error);
  throw new AuthError("An unexpected error occurred", "INTERNAL_ERROR", 500);
}
