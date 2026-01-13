const RefundPage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Refund Policy
        </h1>
        <p className="text-base text-foreground-light">
          View Market provides immediate access to software infrastructure and
          automation tools. For that reason, all fees are final.
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated: January 13, 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">No Refunds</h2>
        <p className="text-sm text-foreground-light">
          We do not provide any type of refund for subscriptions, usage fees, or
          add-on services. All payments are non-refundable to the maximum extent
          permitted by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Cancellations</h2>
        <p className="text-sm text-foreground-light">
          You may cancel at any time to prevent future billing. You remain
          responsible for charges already incurred before cancellation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Disputes</h2>
        <p className="text-sm text-foreground-light">
          If you believe a charge was made in error, contact our support team
          before initiating a charge dispute. We will review account activity
          and respond promptly.
        </p>
      </section>
    </div>
  );
};

export default RefundPage;
