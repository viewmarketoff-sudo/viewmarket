import { redirect } from "next/navigation";

import "./globals.css";
import TitleBar from "@/components/shared/TitleBar";
import { getCurrentUser } from "@/lib/auth";

import CTASection from "./CTASection";
import ExamplesSection from "./ExamplesSection";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import InstantAPIsSection from "./InstantAPIsSection";
import VideoSection from "./VideoSection";
import FooterSection from "./FooterSection";

export default async function Home() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/user-dashboard/main");
  }

  return (
    <main className="flex min-h-screen  w-full flex-col items-center gap-10 ">
      <TitleBar />
      <HeroSection />
      <FeatureSection />
      <ExamplesSection />
      <InstantAPIsSection />
      <VideoSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
