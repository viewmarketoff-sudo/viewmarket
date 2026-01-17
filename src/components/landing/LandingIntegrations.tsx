import Link from "next/link";

import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
} from "@/components/logos";
import { cn } from "@/lib/utils";
import { InfinityLogo } from "@/utils/icons/InfinityLogo";
import { Button } from "@/components/ui/button";

export default function LandingIntegrations() {
  return (
    <section>
      <div className="py-24 md:py-32">
        <div className="mx-auto max-w-full px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="relative mx-auto flex max-w-sm items-center justify-between">
            <div className="space-y-6">
              <IntegrationCard position="left-top">
                <Gemini />
              </IntegrationCard>
              <IntegrationCard position="left-middle">
                <Replit />
              </IntegrationCard>
              <IntegrationCard position="left-bottom">
                <MagicUI />
              </IntegrationCard>
            </div>
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="relative z-20 rounded-2xl border p-1">
                <IntegrationCard
                  className="shadow-black-950/10 size-16 border-black/25 shadow-xl dark:border-white/25 dark:bg-background dark:shadow-white/10"
                  isCenter={true}
                >
                  <InfinityLogo size={32} />
                </IntegrationCard>
              </div>
            </div>
            <div
              role="presentation"
              className="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-50 [--dots-color:black] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[--dots-color:white]"
            ></div>

            <div className="space-y-6">
              <IntegrationCard position="right-top">
                <VSCodium />
              </IntegrationCard>
              <IntegrationCard position="right-middle">
                <MediaWiki />
              </IntegrationCard>
              <IntegrationCard position="right-bottom">
                <GooglePaLM />
              </IntegrationCard>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Connect your stack in minutes
            </h2>
            <p className="text-muted-foreground">
              Plug View Market into the editors, data sources, and copilots your
              team already uses—no rewrites, just automation that fits.
            </p>

            <Button variant="outline" size="sm" asChild>
              <Link href="/sign-in">Connect your tools</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  position,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative flex size-12 rounded-xl border bg-background dark:bg-transparent",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-20 m-auto size-fit *:size-6",
          isCenter && "*:size-8",
        )}
      >
        {children}
      </div>
      {position && !isCenter && (
        <div
          className={cn(
            "bg-linear-to-r absolute z-10 h-px to-muted-foreground/25",
            position === "left-top" &&
              "left-full top-1/2 w-[130px] origin-left rotate-[25deg]",
            position === "left-middle" &&
              "left-full top-1/2 w-[120px] origin-left",
            position === "left-bottom" &&
              "left-full top-1/2 w-[130px] origin-left rotate-[-25deg]",
            position === "right-top" &&
              "bg-linear-to-l right-full top-1/2 w-[130px] origin-right rotate-[-25deg]",
            position === "right-middle" &&
              "bg-linear-to-l right-full top-1/2 w-[120px] origin-right",
            position === "right-bottom" &&
              "bg-linear-to-l right-full top-1/2 w-[130px] origin-right rotate-[25deg]",
          )}
        />
      )}
    </div>
  );
};
