"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import CustomerReview from "@/components/CustomerReview";
import styles from "./about.module.css";

const STATS = [
  { num: "98%", label: "ON-TIME DELIVERY RATE" },
  { num: "95%", label: "REPEAT CLIENT RATE" },
  { num: "120+", label: "WORLDWIDE CLIENTS" },
  { num: "10+", label: "YEARS OF EXPERIENCE" },
];

const PILLARS = [
  {
    title: "Reliability First",
    desc: "Every shipment is backed by real-time tracking, dedicated route monitoring, and proactive communication from pickup to final delivery.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Multi-Modal Expertise",
    desc: "From container vessels and chartered air cargo to moto couriers navigating dense urban corridors — we command every logistics modality.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Port Access & Compliance",
    desc: "Direct integration with Nigerian Ports Authority at Warri, Onne, and Apapa ensures pre-cleared, low-dwell gate releases for every consignment.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Cold Chain Integrity",
    desc: "IoT thermal sensor arrays and dual-compressor reefer trailers maintain ±0.5°C cargo integrity across 800km tropical corridors.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07l14.14-14.14" />
      </svg>
    ),
  },
];

const TEAM = [
  { name: "Tariye Adeyemi", role: "VP Maritime & Port", initials: "TA" },
  { name: "Ngozi Eze", role: "Head of Cold Chain", initials: "NE" },
  { name: "Femi Balogun", role: "Director Urban Dispatch", initials: "FB" },
  { name: "David Okoro", role: "Chief Telematics", initials: "DO" },
  { name: "Amina Al-Mansoor", role: "Director Warehousing", initials: "AA" },
  { name: "Marcus Sterling", role: "Global Freight Strategy", initials: "MS" },
  { name: "Tunde Oladipo", role: "Cross-Border Counsel", initials: "TO" },
  { name: "Sandra Ibeh", role: "Client Success Lead", initials: "SI" },
];

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <Image
          src="/aerial-containers.jpg"
          alt="Aerial view of FOODBOX freight containers"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.kicker}>
            <span className={styles.kickerDot} />
            ABOUT FOODBOX
          </div>
          <h1 className={styles.heroTitle}>
            Reliable logistics,{" "}
            <span className={styles.heroAccent}>built around your business.</span>
          </h1>
          <p className={styles.heroSub}>
            FOODBOX delivers dependable freight and supply chain solutions across
            West Africa — road, sea, and air — designed to simplify every stage
            of transportation with efficiency, visibility, and confidence.
          </p>
        </div>
      </section>

      {/* ══ STAT STRIP ══ */}
      <div className={styles.statStrip}>
        <div className={styles.container}>
          <div className={styles.statGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCell}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ OUR STORY (light) ══ */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <div className={styles.sectionKicker}>
                <span className={styles.kickerSquare} />
                OUR STORY
              </div>
              <h2 className={styles.sectionTitle}>
                Born from the complexity of African trade corridors.
              </h2>
              <p>
                FOODBOX was founded with a clear mandate: eliminate the friction
                that has long plagued commercial freight across West African
                supply chains. From the congestion of Port Harcourt&apos;s
                petroleum terminals to the last-mile bottlenecks in Warri&apos;s
                commercial districts, we engineered operational systems to
                overcome them.
              </p>
              <p>
                With over a decade of dedicated field operations, we have built
                an integrated network of heavy-haulage tractor fleets,
                temperature-controlled reefer trailers, bonded warehouse
                facilities, and agile motorcycle couriers — all unified through
                a single telemetry dashboard.
              </p>
              <p>
                Today FOODBOX serves multinationals, SMEs, pharmaceutical
                distributors, energy sector operators, and government agencies
                with a consistent commitment to transparency, speed, and cargo
                integrity.
              </p>
            </div>

            <div className={styles.storyImgWrapper}>
              <Image
                src="/road-freight-depot.jpg"
                alt="FOODBOX road freight depot operations"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ PILLARS / VALUES (dark) ══ */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionKicker}>
            <span className={styles.kickerSquare} />
            WHAT WE STAND FOR
          </div>
          <h2 className={styles.sectionTitleDark}>
            Four pillars that define
            <br />
            how we operate.
          </h2>
          <div className={styles.pillarsGrid}>
            {PILLARS.map((p, i) => (
              <div key={i} className={styles.pillarCard}>
                <div className={styles.pillarIconRing}>{p.icon}</div>
                <div className={styles.pillarTitle}>{p.title}</div>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM (light) ══ */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamHeader}>
            <div className={styles.sectionKicker}>
              <span className={styles.kickerSquare} />
              OUR TEAM
            </div>
            <h2 className={styles.sectionTitle}>
              The specialists behind every delivery.
            </h2>
          </div>
          <div className={styles.teamGrid}>
            {TEAM.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamImgWrapper}>
                  <div className={styles.teamInitials}>{member.initials}</div>
                </div>
                <div className={styles.teamInfo}>
                  <div className={styles.teamName}>{member.name}</div>
                  <div className={styles.teamRole}>{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL — same component as homepage ══ */}
      <CustomerReview onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* ══ CTA ══ */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to simplify your supply chain?</h2>
          <p className={styles.ctaSub}>
            Talk to a logistics specialist today and get a tailored freight
            solution for your cargo requirements.
          </p>
          <div className={styles.ctaBtnGroup}>
            <button
              type="button"
              className={styles.btnYellow}
              onClick={() => setIsQuoteOpen(true)}
            >
              <span className={styles.btnSquare} />
              GET A QUOTE
            </button>
            <Link href="/services" className={styles.btnGhost}>
              EXPLORE OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
