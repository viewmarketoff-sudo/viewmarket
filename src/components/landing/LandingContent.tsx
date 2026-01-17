import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function LandingContent() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-full space-y-8 px-4 md:space-y-12 lg:px-8 xl:px-12 2xl:px-16">
        <Image
          className="rounded-(--radius) w-full grayscale"
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="team collaboration"
          width={1600}
          height={900}
          sizes="100vw"
          loading="lazy"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            One platform to design, test, and ship automations on chart.
          </h2>
          <div className="space-y-6">
            <p>
              View Market brings your playbooks, signal libraries, and run logs
              into a single workspace. Go from idea to chart-ready automation
              without juggling tools.
            </p>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="/pricing">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
