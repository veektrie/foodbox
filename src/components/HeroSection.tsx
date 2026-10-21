"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import QuoteModal from "./QuoteModal";
import TrackModal from "./TrackModal";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isTrackOpen, setIsTrackOpen] = useState(false);

  return (
    <section className={styles.heroContainer}>
      {/* Background Photography & Cinematic Lighting */}
      <div className={styles.bgWrapper}>
        <Image
          src="/hero-truck.jpg"
          alt="FOODBOX commercial freight truck on open highway"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Floating Navigation Header (Section 4.3 & Reference Image) */}
      <Navbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenTrack={() => setIsTrackOpen(true)}
      />

      {/* Main Hero Content Area */}
      <div className={styles.contentArea}>
        {/* Main Headline from Reference Image */}
        <div className={styles.headlineBlock}>
          <h1 className={styles.headline}>
            Flexible logistics solutions,
            <br />
            built around your business.
          </h1>
        </div>

        {/* Lower Content Row: Microcopy + Buttons on left, HUD stats on right */}
        <div className={styles.bottomRow}>
          {/* Left Column: Technical Description and CTA Action Group */}
          <div className={styles.leftCol}>
            <p className={styles.technicalDescription}>
              RELIABLE FREIGHT, TRANSPORTATION, AND LOGISTICS SOLUTIONS DESIGNED TO KEEP YOUR SUPPLY CHAIN MOVING WITH EFFICIENCY, VISIBILITY, AND CONFIDENCE.
            </p>

            <div className={styles.actionButtons}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsQuoteOpen(true)}
                aria-label="Get a quote"
              >
                <span className="btn-icon-square" />
                GET A QUOTE
              </button>

              <a
                href="#services"
                className="btn btn-ghost"
                aria-label="About us"
              >
                ABOUT US
              </a>
            </div>
          </div>

          {/* Right Column: High-Precision HUD Glass Cards (Section 4.2) */}
          <div className={styles.hudCluster}>
            {/* Card 1: 98% On-Time Delivery Rate */}
            <div className={styles.hudCardWrapper}>
              <div className="hud-card">
                <span className="hud-node-bl" />
                <span className="hud-node-br" />
                <div className="hud-metric-num">
                  98 <span className="hud-metric-unit">%</span>
                </div>
                <div className="hud-divider" />
                <div className="hud-label">ON-TIME DELIVERY RATE</div>
              </div>
            </div>

            {/* Card 2: 24/7 Real-Time Tracking */}
            <div className={styles.hudCardWrapper}>
              <div className="hud-card">
                <span className="hud-node-bl" />
                <span className="hud-node-br" />
                <div className="hud-metric-num">24/7</div>
                <div className="hud-divider" />
                <div className="hud-label">REAL-TIME TRACKING</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
      <TrackModal
        isOpen={isTrackOpen}
        onClose={() => setIsTrackOpen(false)}
      />
    </section>
  );
}
