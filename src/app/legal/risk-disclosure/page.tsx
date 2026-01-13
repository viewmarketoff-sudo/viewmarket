const RiskDisclosurePage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Risk Disclosure
        </h1>
        <p className="text-base text-foreground-light">
          Trading involves substantial risk. This disclosure summarizes key
          risks associated with using View Market and automated execution.
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated: January 13, 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Market and Strategy Risk
        </h2>
        <p className="text-sm text-foreground-light">
          Markets can be volatile and unpredictable. You may lose some or all
          of your capital, and past performance does not guarantee future
          results.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Automation and Execution Risk
        </h2>
        <p className="text-sm text-foreground-light">
          Automated strategies can execute trades faster than manual processes.
          Errors in logic, configuration, or data can result in rapid losses.
          You are responsible for testing and monitoring your automation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Connectivity and Data Risk
        </h2>
        <p className="text-sm text-foreground-light">
          Platform access, broker APIs, and market data feeds can experience
          latency, outages, or inaccuracies. These issues may affect order
          execution and strategy performance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Third-Party Broker Risk
        </h2>
        <p className="text-sm text-foreground-light">
          Brokers and third-party services operate under their own terms and
          risk controls. View Market does not control their systems and is not
          liable for their actions or failures.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          No Advice or Recommendations
        </h2>
        <p className="text-sm text-foreground-light">
          View Market is a software platform only. We do not provide tips,
          recommendations, or investment advice. You are solely responsible for
          all trading decisions and outcomes.
        </p>
      </section>
    </div>
  );
};

export default RiskDisclosurePage;
