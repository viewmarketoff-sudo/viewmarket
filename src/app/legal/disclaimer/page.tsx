const DisclaimerPage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Disclaimer
        </h1>
        <p className="text-base text-foreground-light">
          View Market is a software platform that provides automation tools and
          broker connectivity. We are not a broker, dealer, or investment
          adviser.
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated: January 13, 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          No Investment Advice
        </h2>
        <p className="text-sm text-foreground-light">
          We do not provide trading tips, signals, recommendations, or
          personalized advice. All strategies, automation rules, and trade
          decisions are created and executed by you.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          No Warranty of Results
        </h2>
        <p className="text-sm text-foreground-light">
          Trading involves risk, and results are not guaranteed. Past
          performance does not predict future outcomes. You are solely
          responsible for evaluating any strategy you deploy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Third-Party Data and Services
        </h2>
        <p className="text-sm text-foreground-light">
          Market data, broker services, and integrations are provided by third
          parties. We do not control their accuracy, availability, or timeliness
          and are not liable for issues arising from their services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Limitation of Liability
        </h2>
        <p className="text-sm text-foreground-light">
          View Market provides the platform on an as-is and as-available basis.
          We are not liable for any losses, damages, or missed opportunities
          resulting from the use of the platform.
        </p>
      </section>
    </div>
  );
};

export default DisclaimerPage;
