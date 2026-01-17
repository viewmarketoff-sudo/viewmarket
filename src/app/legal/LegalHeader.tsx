import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { InfinityLogo } from "@/utils/icons/InfinityLogo";

const LegalHeader = () => {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-foreground-light transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card">
            <InfinityLogo size={18} />
          </div>
          View Market
        </div>
      </div>
    </header>
  );
};

export default LegalHeader;
