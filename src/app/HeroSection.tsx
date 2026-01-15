import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import NextJsIcon from "@/utils/icons/NextJsIcon";
import ReactJsIcon from "@/utils/icons/ReactJsIcon";
import FlutterIcon from "@/utils/icons/FlutterIcon";
import SvelteIcon from "@/utils/icons/SvelteIcon";
import VueJsIcon from "@/utils/icons/VueJsIcon";
import NuxtJsIcon from "@/utils/icons/NuxtJsIcon";
import BookIcon from "@/utils/icons/BookIcon";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pb-20 pt-28">
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.18),transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.12),transparent_65%)]" />
      <div className="flex w-full flex-col gap-14 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex flex-1 flex-col items-start gap-6 text-left">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground-light shadow-sm">
            No-code automation
          </div>
          <div className="space-y-3">
            <div className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Automate Your Trading
            </div>
            <div className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Deploy from Charts
            </div>
          </div>
          <CardDescription className="max-w-xl text-base text-card-foreground sm:text-lg">
            View Market is an automation-first trading platform. Deploy
            chart-based strategies with direct broker connections across 40+
            integrated Indian, Forex, and Crypto brokers—no third-party
            platforms required.
          </CardDescription>
          <div className="flex flex-wrap items-center justify-start gap-3">
            <Button variant="default" size="sm">
              Start Trading
            </Button>
            <Button variant="secondary" size="sm">
              <div className="my-auto pr-2 text-foreground/60">
                <BookIcon />
              </div>
              Documentation
            </Button>
          </div>
          <div className="flex flex-col gap-3 text-xs text-foreground-light">
            <span>Build with the stack you already love.</span>
            <div className="flex flex-wrap justify-start gap-2">
              <NextJsIcon /> <ReactJsIcon /> <NuxtJsIcon />
              <FlutterIcon />
              <SvelteIcon /> <VueJsIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 p-6 shadow-[0_24px_80px_-40px_rgba(18,24,40,0.5)] backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.12),transparent_55%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-2xl border border-foreground/10 bg-background/90 px-4 py-3">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-[0.2em] text-foreground-light">
                    Strategy Sync
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    Chart-to-Order Pipeline
                  </div>
                </div>
                <div className="rounded-full bg-foreground/10 px-3 py-1 text-xs text-foreground">
                  Live
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-32 rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/15 via-transparent to-transparent p-4">
                  <div className="flex h-full items-end gap-2">
                    <div className="h-10 w-4 rounded-full bg-foreground/30" />
                    <div className="h-16 w-4 rounded-full bg-foreground/40" />
                    <div className="h-8 w-4 rounded-full bg-foreground/20" />
                    <div className="h-20 w-4 rounded-full bg-foreground/50" />
                    <div className="h-14 w-4 rounded-full bg-foreground/35" />
                    <div className="h-24 w-4 rounded-full bg-foreground/60" />
                    <div className="h-18 w-4 rounded-full bg-foreground/45" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-foreground/10 bg-background/90 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-foreground-light">
                      Signal Engine
                    </div>
                    <div className="mt-2 text-sm font-semibold text-foreground">
                      0.8ms avg execution
                    </div>
                  </div>
                  <div className="rounded-2xl border border-foreground/10 bg-background/90 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-foreground-light">
                      Risk Layer
                    </div>
                    <div className="mt-2 text-sm font-semibold text-foreground">
                      Built-in guardrails
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
