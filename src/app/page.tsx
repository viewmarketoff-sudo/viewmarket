"use client";
import React from "react";

import "./globals.css";
import TitleBar from "@/components/shared/TitleBar";

import CommunitySection from "./CommunitySection";
import HeroSection from "./HeroSection";
import ExamplesSection from "./ExamplesSection";
import InstantAPIsSection from "./InstantAPIsSection";
import VideoSection from "./VideoSection";
import InfrastructureSection from "./InfrastructureSection";
import FeatureSection from "./FeatureSection";
import CTASection from "./CTASection";
import FooterSection from "./FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen  w-full flex-col items-center gap-10 ">
      <TitleBar />
      <HeroSection />
      <FeatureSection />
      <CommunitySection />
      <ExamplesSection />
      <InstantAPIsSection />
      <VideoSection />
      <InfrastructureSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
