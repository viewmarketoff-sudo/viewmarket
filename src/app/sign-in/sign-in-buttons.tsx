"use client";

import { signIn } from "next-auth/react";

const GoogleIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.5 12.3c0-.8-.1-1.6-.3-2.3H12v4.4h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.8c2.2-2 3.7-5 3.7-8.7Z"
      fill="#4285F4"
    />
    <path
      d="M12 24c3.2 0 5.9-1.1 7.9-3l-3.8-3c-1 .7-2.4 1.2-4.1 1.2-3.1 0-5.7-2.1-6.7-4.9h-3.9v3.1A12 12 0 0 0 12 24Z"
      fill="#34A853"
    />
    <path
      d="M5.3 14.3A7.2 7.2 0 0 1 5 12c0-.8.1-1.6.3-2.3V6.6H1.4A12 12 0 0 0 0 12c0 2 .5 4 1.4 5.6l3.9-3.3Z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.8c1.7 0 3.2.6 4.4 1.7l3.3-3.3A11.7 11.7 0 0 0 12 0 12 12 0 0 0 1.4 6.6l3.9 3.1c1-2.8 3.6-4.9 6.7-4.9Z"
      fill="#EA4335"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.45 0 12.17c0 5.38 3.44 9.94 8.2 11.56.6.11.82-.27.82-.6 0-.3-.01-1.1-.02-2.16-3.34.74-4.04-1.66-4.04-1.66-.54-1.4-1.32-1.78-1.32-1.78-1.08-.76.08-.74.08-.74 1.2.09 1.83 1.27 1.83 1.27 1.06 1.85 2.79 1.32 3.48 1 .11-.79.41-1.32.74-1.62-2.67-.31-5.47-1.36-5.47-6.06 0-1.34.47-2.44 1.24-3.3-.13-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.26.96-.27 1.99-.41 3.02-.41s2.06.14 3.02.41c2.29-1.6 3.3-1.26 3.3-1.26.66 1.71.25 2.97.12 3.28.77.86 1.24 1.96 1.24 3.3 0 4.72-2.81 5.75-5.49 6.05.42.36.8 1.08.8 2.18 0 1.57-.02 2.84-.02 3.23 0 .33.22.72.83.6C20.57 22.1 24 17.55 24 12.17 24 5.45 18.63 0 12 0Z" />
  </svg>
);

interface SignInButtonsProps {
  callbackUrl?: string;
}

export function SignInButtons({ callbackUrl }: SignInButtonsProps) {
  const redirectTo = callbackUrl || "/user-dashboard/main";

  return (
    <div className="space-y-4">
      <button
        onClick={() => signIn("google", { callbackUrl: redirectTo })}
        className="mx-auto flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(0,0,0,0.4)]"
      >
        <GoogleIcon />
        Continue with Google
      </button>
      <button
        onClick={() => signIn("github", { callbackUrl: redirectTo })}
        className="mx-auto flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(0,0,0,0.4)]"
      >
        <GithubIcon />
        Continue with GitHub
      </button>
    </div>
  );
}
