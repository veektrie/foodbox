"use client";

import React from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  onOpenQuote?: () => void;
}

export default function AboutSection({ onOpenQuote }: AboutSectionProps) {
  return (
    <section className={styles.sectionWrapper} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ─── Left Column: About Narrative & Action Group ─── */}
          <div className={styles.leftCol}>
            <div className={styles.kicker}>
              <span className={styles.kickerSquare} />
              ABOUT FOODBOX
            </div>

            <h2 className={styles.heading}>
              Reliable Logistics built<br />
              around your business.
            </h2>

            <p className={styles.subtext}>
              FOODBOX DELIVERS DEPENDABLE FREIGHT AND SUPPLY CHAIN SOLUTIONS
              DESIGNED TO SIMPLIFY EVERY STAGE OF TRANSPORTATION. THROUGH
              EXPERIENCED COORDINATION, TRANSPARENT COMMUNICATION, AND A TRUSTED
              LOGISTICS NETWORK, WE KEEP YOUR GOODS MOVING SAFELY AND EFFICIENTLY.
            </p>

            {/* Action Buttons: Primary + Secondary */}
            <div className={styles.btnGroup}>
              <button
                type="button"
                className={styles.primaryBtn}
                onClick={onOpenQuote}
              >
                <span className={styles.btnSquare} />
                REQUEST A QUOTE
              </button>

              <a href="#how-we-deliver" className={styles.secondaryBtn}>
                ABOUT FOODBOX
              </a>
            </div>
          </div>

          {/* ─── Right Column: Visual Carrier + Floating Stat Squares ─── */}
          <div className={styles.visualCol}>
            {/* Top Container Vessel / Freight Photo */}
            <div className={styles.imageWrapper}>
              <Image
                src="/aerial-containers.jpg"
                alt="Freight transport containers top view"
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className={styles.carrierImage}
                priority
              />
            </div>

            {/* 3 Floating Stat Squares Layered Across Image */}
            <div className={styles.statsCluster}>
              {/* Card 1: Black - 98% Years of Experience */}
              <div className={styles.statCardBlack}>
                <div className={styles.statNum}>
                  98 <span className={styles.statUnit}>%</span>
                </div>
                <div className={styles.statLabel}>YEARS OF EXPERIENCE</div>
              </div>

              {/* Card 2: Yellow - 95% Repeat Client Rate */}
              <div className={styles.statCardYellow}>
                <div className={styles.statNum}>
                  95 <span className={styles.statUnit}>%</span>
                </div>
                <div className={styles.statLabel}>REPEAT CLIENT RATE</div>
              </div>

              {/* Card 3: Light Gray - 120+ Worldwide Clients */}
              <div className={styles.statCardLight}>
                <div className={styles.statNum}>120 +</div>
                <div className={styles.statLabel}>WORLDWIDE CLIENTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
