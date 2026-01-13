const PrivacyPage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-base text-foreground-light">
          This policy explains how View Market collects, uses, and shares
          information when you access our platform, websites, and related
          services.
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated: January 13, 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Information We Collect
        </h2>
        <p className="text-sm text-foreground-light">
          We collect information that helps us operate the platform, secure your
          account, and improve performance.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-foreground-light">
          <li>Account data such as name, email, company, and login details.</li>
          <li>
            Usage data like pages viewed, actions taken, and feature usage.
          </li>
          <li>
            Device and network data including IP address, browser type, and
            operating system.
          </li>
          <li>
            Integration metadata for broker connections and automation logs that
            you enable.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          How We Use Information
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-foreground-light">
          <li>Provide, maintain, and improve the View Market platform.</li>
          <li>Authenticate users and protect against abuse or fraud.</li>
          <li>Process subscriptions and communicate about your account.</li>
          <li>Monitor performance and build new features.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          How We Share Information
        </h2>
        <p className="text-sm text-foreground-light">
          We do not sell your personal data. We only share information with
          trusted parties when required to run the service.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-foreground-light">
          <li>
            Service providers that help with hosting, analytics, billing, and
            support.
          </li>
          <li>
            Third-party brokers or integrations when you initiate a connection.
          </li>
          <li>Legal or regulatory requests when required by law.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Data Retention and Security
        </h2>
        <p className="text-sm text-foreground-light">
          We retain information as long as needed to provide the service and
          meet legal obligations. We use reasonable security measures to protect
          data, but no system is fully secure.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Your Choices</h2>
        <p className="text-sm text-foreground-light">
          You can request access, corrections, or deletion of your data by
          contacting our support team. You may also manage cookies through your
          browser settings.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPage;
