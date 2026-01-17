import { redirect } from "next/navigation";

import "./globals.css";
import { getCurrentUser } from "@/lib/auth";
import LandingHero from "@/components/landing/LandingHero";
import LandingFeatures from "@/components/landing/LandingFeatures";
import LandingIntegrations from "@/components/landing/LandingIntegrations";
import LandingContent from "@/components/landing/LandingContent";
import LandingCTA from "@/components/landing/LandingCTA";
import LandingFooter from "@/components/landing/LandingFooter";

export default async function Home() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/user-dashboard/main");
  }

  return (
    <div className="relative">
      {/* Curved border wrapper for entire page */}
      <div className="absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 dark:border-white/5 lg:rounded-[3rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
          src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
        />
      </div>

      <LandingHero />
      <LandingFeatures />
      <LandingIntegrations />
      <LandingContent />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
