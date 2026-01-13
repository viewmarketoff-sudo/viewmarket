const TermsOfServicePage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="text-base text-foreground-light">
          By accessing or using View Market, you agree to these terms. If you do
          not agree, do not use the platform.
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated: January 13, 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Platform Access
        </h2>
        <p className="text-sm text-foreground-light">
          You must be at least 18 years old and provide accurate account
          information. You are responsible for safeguarding your credentials and
          any activity that occurs under your account.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          License and Acceptable Use
        </h2>
        <p className="text-sm text-foreground-light">
          View Market grants you a limited, non-transferable license to use the
          platform for your internal business or personal trading operations.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-foreground-light">
          <li>
            Do not reverse engineer, scrape, or interfere with the service.
          </li>
          <li>Do not use the platform for unlawful or abusive activity.</li>
          <li>Do not attempt to access data you are not authorized to use.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          No Advice or Recommendations
        </h2>
        <p className="text-sm text-foreground-light">
          View Market is a software-only platform. We do not provide trading
          tips, recommendations, or investment advice. You are solely
          responsible for any strategies you deploy and any trades you execute.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Subscriptions and Billing
        </h2>
        <p className="text-sm text-foreground-light">
          If you purchase a subscription or paid feature, you authorize us to
          bill your payment method for the agreed fees. All payments are
          non-refundable, and we do not provide any type of refund.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Third-Party Services
        </h2>
        <p className="text-sm text-foreground-light">
          Broker connections, market data, and integrations are provided by
          third parties. You are responsible for complying with their terms and
          understanding their risks and limitations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Suspension and Termination
        </h2>
        <p className="text-sm text-foreground-light">
          We may suspend or terminate access if we believe there is a violation
          of these terms or a risk to the platform. You may stop using View
          Market at any time by discontinuing access.
        </p>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
