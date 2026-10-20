"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import LogisticsSolutions from "@/components/LogisticsSolutions";
import HowWeDeliver from "@/components/HowWeDeliver";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import CustomerReview from "@/components/CustomerReview";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import TrackModal from "@/components/TrackModal";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isTrackOpen, setIsTrackOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeCode, setActiveCode] = useState("MOTO-892-NY");
  const [activeMode, setActiveMode] = useState<"urban" | "air">("urban");

  const handleTrackFromTerminal = (code: string, mode: "urban" | "air") => {
    setActiveCode(code);
    setActiveMode(mode);
    setIsTrackOpen(true);
  };

  return (
    <main>
      {/* 1. HERO: Primary Value Proposition, Telemetry & Instant Conversion Hooks */}
      <HeroSection />

      {/* 2. CREDIBILITY & ENTERPRISE FOUNDATION: Validate the hero promise immediately */}
      <AboutSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 3. MULTI-MODAL SERVICES: Show core capabilities (Road, Ocean, Air Freight) */}
      <LogisticsSolutions onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 4. COMPETITIVE ADVANTAGES: Why Choose FoodBox vs. alternatives */}
      <WhyChooseUs />

      {/* 5. PROCESS & FRICTION REDUCTION: 4-Step simple operational flow */}
      <HowWeDeliver onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 6. SOCIAL PROOF & VALIDATION: Client reviews, trust, and risk reversal */}
      <CustomerReview onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 7. CONVERSION CLIMAX: High-impact terminal CTA before footer */}
      <CtaSection
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenTrack={() => handleTrackFromTerminal("MOTO-892-NY", "urban")}
      />

      {/* Minimal Footer */}
      <Footer
        onOpenTrack={() => handleTrackFromTerminal("MOTO-892-NY", "urban")}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Modals */}
      <TrackModal
        isOpen={isTrackOpen}
        onClose={() => setIsTrackOpen(false)}
        initialCode={activeCode}
        initialMode={activeMode}
      />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </main>
  );
}
