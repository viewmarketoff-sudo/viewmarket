import NextAuth from "next-auth";

import { upsertProfile } from "@/lib/profile";

import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account }) {
      if (!account) return false;

      try {
        await upsertProfile({
          authUserId: user.id!,
          email: user.email,
          name: user.name,
          avatarUrl: user.image,
          provider: account.provider,
          providerId: account.providerAccountId,
        });
        return true;
      } catch (error) {
        console.error("Profile upsert failed:", error);
        return false;
      }
    },
    async jwt({ token, user, account }) {
      if (user) {
        return {
          ...token,
          userId: user.id,
          provider: account?.provider,
        };
      }
      return token;
    },
    async session({ session, token }) {
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
