import Link from "next/link";
import { Lock } from "lucide-react";

import LegalHeader from "../legal/LegalHeader";

import { SignInButtons } from "./sign-in-buttons";

interface SignInPageProps {
  searchParams: Promise<{ error?: string; callbackUrl?: string }>;
}

const errorMessages: Record<string, string> = {
  OAuthAccountNotLinked:
    "This email is already associated with another account.",
  OAuthCallbackError: "Authentication failed. Please try again.",
  OAuthSignin: "Could not start authentication. Please try again.",
  default: "An error occurred during sign in. Please try again.",
};

const SignInPage = async ({ searchParams }: SignInPageProps) => {
  const { error, callbackUrl } = await searchParams;
  const errorMessage = error
    ? errorMessages[error] || errorMessages.default
    : null;

  return (
    <div className="min-h-screen w-full bg-background">
      <LegalHeader />
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1200px] flex-col justify-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <section className="max-w-xl space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Sign in to your
            <br />
            workspace.
          </h1>
          <p className="text-base leading-relaxed text-foreground-light sm:text-lg">
            Access your charts, strategies, and automation pipelines. Continue
            building with your team.
          </p>
        </section>

        <section className="w-full max-w-md space-y-6 lg:border-l lg:border-border/60 lg:pl-16">
          {errorMessage && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {errorMessage}
            </div>
          )}

          <SignInButtons callbackUrl={callbackUrl} />

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border/70" />
            <span className="uppercase tracking-[0.2em]">Enterprise SSO</span>
            <div className="h-px flex-1 bg-border/70" />
          </div>

          <button
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border/70 bg-muted/30 px-6 py-3 text-sm font-semibold text-muted-foreground"
            disabled
          >
            <Lock className="h-4 w-4" />
            Sign in with SSO
          </button>

          <p className="text-center text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link
              href="/legal/terms-of-service"
              className="text-[#f2a13a] transition-colors hover:text-[#f6b562]"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/legal/privacy"
              className="text-[#f2a13a] transition-colors hover:text-[#f6b562]"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default SignInPage;
