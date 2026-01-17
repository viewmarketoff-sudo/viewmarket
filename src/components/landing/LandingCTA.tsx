import { Mail, SendHorizonal } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingCTA() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-full px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Launch automations with confidence
          </h2>
          <p className="mt-4">
            Move from idea to chart-ready workflows faster with View Market. No
            licenses required—just automation that runs itself.
          </p>

          <form action="" className="mx-auto mt-10 max-w-sm lg:mt-12">
            <div className="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border bg-background pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-muted">
              <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <input
                placeholder="Work email"
                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                type="email"
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button aria-label="submit" className="rounded-(--radius)">
                  <span className="hidden md:block">Get Started</span>
                  <SendHorizonal
                    className="relative mx-auto size-5 md:hidden"
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
