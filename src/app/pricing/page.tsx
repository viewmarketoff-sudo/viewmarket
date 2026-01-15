"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import TitleBar from "@/components/shared/TitleBar";
import { cn } from "@/lib/utils";

import FooterSection from "../FooterSection";

const planOrder = [
  "Free",
  "Essential",
  "Pro",
  "Premium",
  "Enterprise",
] as const;
type PlanName = (typeof planOrder)[number];
type BillingCycle = "monthly" | "yearly";

type PriceInfo = {
  amount: number;
  display: string;
  descriptor: string;
};

type PlanConfig = {
  name: PlanName;
  tagline: string;
  monthlyAmount?: number;
  highlights: string[];
  cta: string;
  featured?: boolean;
};

const DISCOUNT_RATE = 0.2;

const BillingToggle = ({
  value,
  onChange,
}: {
  value: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}) => (
  <div className="inline-flex items-center overflow-hidden rounded-full border border-border bg-card text-sm font-medium shadow-inner">
    {(["monthly", "yearly"] as BillingCycle[]).map((cycle) => (
      <button
        key={cycle}
        type="button"
        onClick={() => onChange(cycle)}
        className={cn(
          "px-5 py-1.5 capitalize transition-all focus-visible:outline-none",
          value === cycle
            ? "bg-gradient-to-b from-foreground to-foreground-light text-background"
            : "text-foreground-light",
        )}
        aria-pressed={value === cycle}
      >
        {cycle}
      </button>
    ))}
  </div>
);

const plans: PlanConfig[] = [
  {
    name: "Free",
    tagline: "For traders trying automation for the first time",
    monthlyAmount: 0,
    highlights: [
      "2 automated strategies",
      "Single broker connection",
      "Real-time chart widgets",
      "Community runbooks",
      "Manual order bridge",
      "Email alerts (hourly)",
      "Webhook triggers",
      "Basic encryption",
      "API limit 5 calls/sec",
      "1 workspace seat",
    ],
    cta: "Start for free",
  },
  {
    name: "Essential",
    tagline: "Level up with broker syncing and alerts",
    monthlyAmount: 999,
    highlights: [
      "10 automated strategies",
      "3 broker connections",
      "10K historical bars",
      "Parallel order routing",
      "20 price alerts",
      "20 technical alerts",
      "Volume profile access",
      "Custom timeframes",
      "2 workspaces",
      "Email + chat support",
    ],
    cta: "Upgrade now",
  },
  {
    name: "Pro",
    tagline: "Purpose-built for active prop desks",
    monthlyAmount: 2499,
    highlights: [
      "25 automated strategies",
      "6 broker connections",
      "20K historical bars",
      "50 parallel orders",
      "100 price alerts",
      "100 technical alerts",
      "Custom range bars",
      "Risk guardrails",
      "3 workspaces",
      "Priority support",
    ],
    cta: "Go Pro",
    featured: true,
  },
  {
    name: "Premium",
    tagline: "Advanced automation with collaboration",
    monthlyAmount: 4449,
    highlights: [
      "50 automated strategies",
      "10 broker connections",
      "40K historical bars",
      "200 parallel orders",
      "400 price alerts",
      "400 technical alerts",
      "Strategy templates",
      "Workflow automations",
      "Role-based access",
      "Shared playbooks",
    ],
    cta: "Scale now",
  },
  {
    name: "Enterprise",
    tagline: "For exchanges, brokerages, and funds",
    monthlyAmount: undefined,
    highlights: [
      "Unlimited strategies",
      "Dedicated broker mesh",
      "Private historical lake",
      "Unlimited parallel routes",
      "1K+ price alerts",
      "1K+ technical alerts",
      "Dedicated CSM",
      "Custom integrations",
      "On-prem / VPC",
      "24/7 war-room",
    ],
    cta: "Contact Sales",
  },
];

type ComparisonRow = {
  group: string;
  feature: string;
  detail?: string;
  availability: Record<PlanName, boolean>;
};

const comparisonRows: ComparisonRow[] = [
  {
    group: "Data & Signals",
    feature: "Real-time market data",
    detail: "Tick-perfect feeds across NSE, MCX, FX",
    availability: {
      Free: true,
      Essential: true,
      Pro: true,
      Premium: true,
      Enterprise: true,
    },
  },
  {
    group: "Data & Signals",
    feature: "Automated order routing",
    detail: "Direct broker APIs with failover",
    availability: {
      Free: false,
      Essential: true,
      Pro: true,
      Premium: true,
      Enterprise: true,
    },
  },
  {
    group: "Risk & Compliance",
    feature: "Risk controls",
    detail: "Position limits and circuit breakers",
    availability: {
      Free: false,
      Essential: false,
      Pro: true,
      Premium: true,
      Enterprise: true,
    },
  },
  {
    group: "Collaboration",
    feature: "Team workspaces",
    detail: "Invite desks, share playbooks",
    availability: {
      Free: false,
      Essential: false,
      Pro: false,
      Premium: true,
      Enterprise: true,
    },
  },
  {
    group: "Enterprise",
    feature: "Custom integrations",
    detail: "Private connectors + dedicated engineers",
    availability: {
      Free: false,
      Essential: false,
      Pro: false,
      Premium: false,
      Enterprise: true,
    },
  },
];

const comparatorActions: Record<PlanName, { label: string }> = {
  Free: { label: "Get started" },
  Essential: { label: "Buy now" },
  Pro: { label: "Buy now" },
  Premium: { label: "Buy now" },
  Enterprise: { label: "Contact sales" },
};

const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

const getPlanPrice = (
  plan: PlanConfig,
  cycle: BillingCycle,
): PriceInfo | null => {
  if (plan.monthlyAmount === undefined) {
    return null;
  }

  const amount =
    cycle === "monthly"
      ? plan.monthlyAmount
      : Math.round(plan.monthlyAmount * (1 - DISCOUNT_RATE));

  const descriptor =
    plan.monthlyAmount === 0
      ? "Free forever"
      : cycle === "monthly"
        ? "per month, billed monthly"
        : `per month (${Math.round(DISCOUNT_RATE * 100)}% off), billed yearly`;

  return {
    amount,
    display: formatINR(amount),
    descriptor,
  };
};

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <main className="flex min-h-screen w-full flex-col bg-background">
      <TitleBar />
      <div className="mt-16 flex flex-1 flex-col gap-16 pb-20 pt-10">
        <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground-light">
                COMPARE PRICES & FEATURES
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                See how each plan scales depth, automation, and coverage
              </h2>
              <p className="mt-2 text-sm text-foreground-light">
                Switch billing to match your workflow and quickly scan which
                capabilities unlock per plan tier.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground-light">
                Compare plans
              </p>
              <BillingToggle value={billingCycle} onChange={setBillingCycle} />
            </div>
            <div className="rounded-[28px] border border-border/70 bg-background p-[1px] shadow-[0_30px_120px_-80px_rgba(0,0,0,0.9)]">
              <div className="rounded-[26px] border border-border/70 bg-background text-foreground">
                <div className="grid grid-cols-[1.6fr_repeat(5,1fr)] items-center gap-3 px-5 py-6 text-left text-sm font-semibold">
                  <span className="text-base">Features</span>
                  {planOrder.map((planName) => {
                    const plan = plans.find((item) => item.name === planName)!;
                    const priceInfo = getPlanPrice(plan, billingCycle);
                    const action = comparatorActions[planName];

                    return (
                      <div key={planName} className="space-y-2 text-center">
                        <div className="text-base font-semibold">
                          {planName}
                        </div>
                        {priceInfo ? (
                          <div className="text-xs text-foreground-light">
                            {priceInfo.display}
                            /mo
                          </div>
                        ) : (
                          <div className="text-xs text-foreground-light">
                            Contact sales
                          </div>
                        )}
                        <Button size="sm" className="mt-1 w-full text-xs">
                          {action.label}
                        </Button>
                      </div>
                    );
                  })}
                </div>
                <div className="h-px w-full bg-border/60" />
                <div className="divide-y divide-border/60">
                  {comparisonRows.map((row, index) => {
                    const previousGroup = comparisonRows[index - 1]?.group;
                    const showGroup = row.group !== previousGroup;
                    return (
                      <div key={row.feature} className="w-full">
                        {showGroup && (
                          <div className="grid grid-cols-[1.6fr_repeat(5,1fr)] items-center bg-card/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground-light">
                            <span className="col-span-full">{row.group}</span>
                          </div>
                        )}
                        <div className="grid grid-cols-[1.6fr_repeat(5,1fr)] items-center px-5 py-4 text-sm">
                          <div className="space-y-1 pr-4">
                            <p className="font-medium text-foreground">
                              {row.feature}
                            </p>
                            {row.detail && (
                              <p className="text-xs text-foreground-light">
                                {row.detail}
                              </p>
                            )}
                          </div>
                          {planOrder.map((plan) => {
                            const included = row.availability[plan];
                            return (
                              <div
                                key={plan}
                                className="flex items-center justify-center"
                              >
                                <span
                                  role="img"
                                  aria-label={
                                    included
                                      ? `${plan} includes ${row.feature}`
                                      : `${plan} does not include ${row.feature}`
                                  }
                                  className={cn(
                                    "text-lg",
                                    included
                                      ? "text-emerald-400"
                                      : "text-foreground/40",
                                  )}
                                >
                                  {included ? "✓" : "×"}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
};

export default PricingPage;
