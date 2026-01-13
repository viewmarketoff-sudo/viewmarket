"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const legalItems = [
  { title: "Privacy", href: "/legal/privacy" },
  { title: "Disclaimer", href: "/legal/disclaimer" },
  { title: "Terms of Service", href: "/legal/terms-of-service" },
  { title: "Risk Disclosure", href: "/legal/risk-disclosure" },
  { title: "Cookies", href: "/legal/cookies" },
  { title: "Refund", href: "/legal/refund" },
];

const LegalSideNav = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h2 className="text-lg font-semibold text-foreground">Policies</h2>
        <p className="text-sm text-foreground-light">
          Governance and risk disclosures for the View Market platform.
        </p>
      </div>
      <nav className="grid grid-cols-2 gap-2 lg:flex lg:flex-col">
        {legalItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "rounded-md border border-transparent px-3 py-2 text-sm text-foreground-light transition-colors hover:border-border hover:bg-muted/40 hover:text-foreground",
                isActive && "border-border bg-muted/60 text-foreground",
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default LegalSideNav;
