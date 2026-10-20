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
      {/* 1. Hero Section: Primary Value Proposition & Fleet Telematics */}
      <HeroSection />

      {/* 2. Logistics Solutions: Core Multi-Modal Capabilities (Road, Ocean, Air) */}
      <LogisticsSolutions onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 3. Why Choose FoodBox: Strategic Pillars, Port Access & Cold Chain Tech */}
      <WhyChooseUs />

      {/* 4. How We Deliver: Clear 4-Step Operational Flow (Order to Doorstep) */}
      <HowWeDeliver onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 5. About FoodBox: Infrastructure, Fleet Scale (120+ Hubs) & Verified Performance */}
      <AboutSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 6. Customer Review: Social Proof, Client Testimonial Slider & Measurable Impact */}
      <CustomerReview onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Grand Container Terminal CTA Section (Directly Above Footer) */}
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
