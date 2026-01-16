import NextAuth from "next-auth";

import { upsertProfile, getProfileByEmail } from "@/lib/profile";
import { rateLimit, getRateLimitIdentifier } from "@/lib/rate-limit";
import { logAuditEvent, auditEvents } from "@/lib/audit";

import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 4, // 4 hours (reduced from 12 for security)
    updateAge: 60 * 15, // refresh JWT every 15 minutes (reduced from 30)
  },
  jwt: {
    maxAge: 60 * 60 * 4, // Match session duration
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Rate limiting check
      try {
        const identifier = await getRateLimitIdentifier();
        const limit = await rateLimit(identifier, {
          interval: 900000, // 15 minutes
          maxRequests: 10, // Max 10 login attempts per 15 minutes
        });

        if (!limit.success) {
          console.error("Rate limit exceeded", { identifier });
          await logAuditEvent(user.id || null, auditEvents.LOGIN_RATE_LIMITED, {
            provider: account?.provider,
            email: user.email,
            identifier,
          });
          return false;
        }
      } catch (error) {
        console.error("Rate limit check failed:", error);
        // Continue even if rate limiting fails (fail open)
      }

      // Validate account metadata
      if (!account) {
        console.error("Sign-in blocked: no account object");
        return false;
      }

      if (!account.provider || !account.providerAccountId) {
        console.error("Sign-in blocked: missing provider metadata", {
          account,
        });
        await logAuditEvent(user.id || null, auditEvents.LOGIN_FAILED, {
          reason: "missing_provider_metadata",
          email: user.email,
        });
        return false;
      }

      // Strict email verification for OAuth providers
      const emailVerified = (
        profile as { email_verified?: boolean } | undefined
      )?.email_verified;

      // Google requires explicit true
      if (account.provider === "google" && emailVerified !== true) {
        console.error("Sign-in blocked: Google email not verified", {
          email: user.email,
          verified: emailVerified,
        });
        await logAuditEvent(user.id || null, auditEvents.EMAIL_NOT_VERIFIED, {
          provider: account.provider,
          email: user.email,
          verified: emailVerified,
        });
        return false;
      }

      // GitHub requires email exists and not explicitly false
      if (account.provider === "github") {
        if (!user.email || emailVerified === false) {
          console.error("Sign-in blocked: GitHub email not verified", {
            email: user.email,
            verified: emailVerified,
          });
          await logAuditEvent(user.id || null, auditEvents.EMAIL_NOT_VERIFIED, {
            provider: account.provider,
            email: user.email,
            verified: emailVerified,
          });
          return false;
        }
      }

      // Check for account linking (same email, different provider)
      try {
        const existingProfile = await getProfileByEmail(user.email!);

        if (existingProfile && existingProfile.provider !== account.provider) {
          console.error("Account linking detected", {
            existingProvider: existingProfile.provider,
            newProvider: account.provider,
            email: user.email,
          });
          await logAuditEvent(
            existingProfile.auth_user_id,
            auditEvents.ACCOUNT_LINKING_DETECTED,
            {
              existingProvider: existingProfile.provider,
              attemptedProvider: account.provider,
              email: user.email,
            },
          );
          // Block for now - can implement account linking flow later
          return false;
        }
      } catch (error) {
        console.error("Failed to check for existing profile:", error);
        // Continue even if check fails
      }

      // Create/update profile
      try {
        await upsertProfile({
          authUserId: user.id!,
          email: user.email,
          name: user.name,
          avatarUrl: user.image,
          provider: account.provider,
          providerId: account.providerAccountId,
        });

        await logAuditEvent(user.id!, auditEvents.LOGIN_SUCCESS, {
          provider: account.provider,
          email: user.email,
        });

        return true;
      } catch (error) {
        console.error("Profile upsert failed:", error);
        await logAuditEvent(user.id || null, auditEvents.LOGIN_FAILED, {
          reason: "profile_upsert_failed",
          provider: account.provider,
          email: user.email,
          error: String(error),
        });
        return false;
      }
    },
    async jwt({ token, user, account }) {
      if (user) {
        return {
          ...token,
          userId: user.id,
          provider: account?.provider,
          sessionId: crypto.randomUUID(), // Session fingerprint
          iat: Math.floor(Date.now() / 1000),
        };
      }

      // Validate token age
      const tokenAge =
        Math.floor(Date.now() / 1000) - ((token.iat as number) || 0);
      if (tokenAge > 60 * 60 * 4) {
        // Force re-authentication after 4 hours
        return null;
      }

      return token;
    },
    async session({ session, token }) {
      if (!token || !token.userId) {
        return session;
      }

      return {
        ...session,
        user: {
          ...session.user,
          id: token.userId as string,
          provider: token.provider as string,
        },
      };
    },
  },
});
