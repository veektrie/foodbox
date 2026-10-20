"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import LogisticsSolutions from "@/components/LogisticsSolutions";
import HowWeDeliver from "@/components/HowWeDeliver";
import TrackingBar from "@/components/TrackingBar";
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
      {/* Hero Section */}
      <HeroSection />

      {/* Logistics Solutions Section */}
      <LogisticsSolutions onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* How We Deliver — Process Steps Section */}
      <HowWeDeliver onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Unified Single-Terminal Tracking Bar */}
      <TrackingBar onTrack={handleTrackFromTerminal} />

      {/* Why Choose FoodBox / Blog & Editorial Section */}
      <WhyChooseUs />

      {/* About FoodBox Section (Directly Above Testimonial) */}
      <AboutSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Customer Review Section (Directly Above CTA) */}
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
