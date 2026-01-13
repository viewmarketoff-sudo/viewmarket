const CookiesPage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Cookies Policy
        </h1>
        <p className="text-base text-foreground-light">
          This policy describes how View Market uses cookies and similar
          technologies to operate and improve the platform.
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated: January 13, 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          What Are Cookies
        </h2>
        <p className="text-sm text-foreground-light">
          Cookies are small text files stored on your device. They help us
          remember your preferences, keep you signed in, and measure platform
          performance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          How We Use Cookies
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-foreground-light">
          <li>Essential cookies for authentication and security.</li>
          <li>Preference cookies to remember settings and language.</li>
          <li>Performance cookies to understand feature usage and reliability.</li>
          <li>Analytics cookies to measure traffic and improve the platform.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Your Choices</h2>
        <p className="text-sm text-foreground-light">
          You can control cookies through your browser settings. Disabling
          cookies may limit certain features or require you to sign in more
          frequently.
        </p>
      </section>
    </div>
  );
};

export default CookiesPage;
