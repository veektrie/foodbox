"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import styles from "./services.module.css";

/* ─── Service data ─── */
const SERVICES = [
  {
    id: "road",
    label: "Road Freight",
    tabIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    image: "/road-freight-depot.jpg",
    imageAlt: "FOODBOX road freight depot",
    metricNum: "250",
    metricUnit: "+",
    metricLabel: "NATIONWIDE DELIVERY ROUTES",
    tags: ["DOMESTIC", "GROUND", "HAULAGE"],
    title: "Road Freight",
    desc: "Reliable ground transportation designed for efficient local, regional, and nationwide deliveries across West Africa. From FTL long-haul convoys to LTL regional consolidations, our fleet of GPS-monitored tractor-trailers guarantees safe, timely cargo movement.",
    features: [
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
        title: "NATIONWIDE NETWORK",
        sub: "DEPENDABLE REGIONAL COVERAGE",
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
        title: "FLEXIBLE CAPACITY",
        sub: "FTL & LTL OPTIONS",
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>,
        title: "24/7 SUPPORT",
        sub: "RESPONSIVE COORDINATION",
      },
    ],
  },
  {
    id: "sea",
    label: "Sea Freight",
    tabIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 17l1.5-5.5L12 4l7.5 7.5L21 17" />
        <path d="M3 17h18M5 20h14" />
      </svg>
    ),
    image: "/sea-freight.jpg",
    imageAlt: "FOODBOX sea freight container port",
    metricNum: "120",
    metricUnit: "+",
    metricLabel: "GLOBAL PORT CONNECTIONS",
    tags: ["GLOBAL", "CONTAINER", "FCL / LCL"],
    title: "Sea Freight",
    desc: "Cost-effective international freight solutions for businesses shipping cargo across global sea lanes. We handle full container load (FCL) and less-than-container load (LCL) shipments with comprehensive customs brokerage, pre-clearance, and port-to-door delivery.",
    features: [
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
        title: "GLOBAL NETWORK",
        sub: "WORLDWIDE SHIPPING ROUTES",
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
        title: "FCL & LCL",
        sub: "ALL CONTAINER TYPES",
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
        title: "CUSTOMS SUPPORT",
        sub: "SMOOTH BORDER CLEARANCE",
      },
    ],
  },
  {
    id: "air",
    label: "Air Freight",
    tabIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7 4 8l6 4-4 4-3-1-1 1 2.5 2.5L7 21l1-1-1-3 4-4 4 6 1.2-1.3z" />
      </svg>
    ),
    image: "/air-cargo.jpg",
    imageAlt: "FOODBOX air cargo aircraft",
    metricNum: "24–48",
    metricUnit: "H",
    metricLabel: "EXPRESS CARGO DELIVERY",
    tags: ["EXPRESS", "AIR CARGO", "CHARTER"],
    title: "Air Freight",
    desc: "Fast and secure air freight services for urgent, valuable, and time-sensitive cargo. Whether you need chartered heavy-lift for oversized machinery or express courier forwarding for priority documents, our air desk manages the entire flow from origin airport to final delivery.",
    features: [
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7 4 8l6 4-4 4-3-1-1 1 2.5 2.5L7 21l1-1-1-3 4-4 4 6 1.2-1.3z" /></svg>,
        title: "GLOBAL AIR NETWORK",
        sub: "MAJOR TRADE LANES",
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: "PRIORITY HANDLING",
        sub: "FAST & SECURE MOVEMENT",
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
        title: "LIVE TRACK",
        sub: "REAL-TIME UPDATES",
      },
    ],
  },
];

/* ─── Additional specialty services ─── */
const SPECIALTIES = [
  {
    title: "Cold Chain & Agri Logistics",
    desc: "IoT thermal sensors + dual-compressor reefer trailers maintain ±0.5°C cargo integrity across 800km tropical corridors for pharma, food, and agricultural produce.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07l14.14-14.14" /></svg>,
  },
  {
    title: "Urban Last-Mile Dispatch",
    desc: "Reinforced motorcycle couriers with tamper-evident cargo boxes and real-time SMS verification deliver within 45 minutes across dense city corridors.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  },
  {
    title: "Port Clearing & Customs",
    desc: "Direct NPA integration at Warri, Onne & Apapa for pre-cleared, low-dwell gate releases. Automated cargo manifests submitted 48 hours before vessel berthing.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  },
  {
    title: "Warehousing & Cross-Docking",
    desc: "Rapid-velocity cross-dock terminals keep freight dwell time under 6 hours. Bonded vaults, laser barcode sorters, and solar-powered electric forklifts operating 24/7.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  },
  {
    title: "Cross-Border Trade (ECOWAS)",
    desc: "Single-window customs declarations, AfCFTA-compliant certificates of origin, and pre-approved transit carnets eliminate typical border bottlenecks across the region.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  },
  {
    title: "Fleet Telematics & Tracking",
    desc: "Predictive telemetry — tire pressure TPMS, brake thermal detectors, fuel flow meters, and driver fatigue monitoring — prevent breakdowns before they happen.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  },
];

const STEPS = [
  { index: "01", title: "Request a Quote", desc: "Share cargo details, destination, and schedule with our logistics desk." },
  { index: "02", title: "Plan the Shipment", desc: "We determine the optimal route, mode, timeline, and handling requirements." },
  { index: "03", title: "Move and Track", desc: "Real-time visibility across every transit leg with proactive status updates." },
  { index: "04", title: "Deliver with Confidence", desc: "Safe, secure, on-schedule final delivery with digital proof of receipt." },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <Image
          src="/sea-freight.jpg"
          alt="FOODBOX sea freight shipping operations"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.kicker}>
            <span className={styles.kickerDot} />
            OUR SERVICES
          </div>
          <h1 className={styles.heroTitle}>
            Whether you&apos;re shipping across the city{" "}
            <span className={styles.heroAccent}>or across the world.</span>
          </h1>
          <p className={styles.heroSub}>
            Multi-modal freight solutions for road, sea, and air — plus cold chain,
            urban dispatch, and port clearing across West Africa.
          </p>
        </div>
      </section>

      {/* ══ STICKY SERVICE TABS ══ */}
      <div className={styles.tabStrip} role="tablist" aria-label="Service categories">
        <div className={styles.tabList}>
          {SERVICES.map((svc, i) => (
            <button
              key={svc.id}
              type="button"
              role="tab"
              aria-selected={activeService === i}
              onClick={() => setActiveService(i)}
              className={`${styles.tabBtn} ${activeService === i ? styles.tabBtnActive : ""}`}
            >
              <span className={styles.tabIcon}>{svc.tabIcon}</span>
              {svc.label}
            </button>
          ))}
        </div>
      </div>

      {/* ══ SERVICE PANELS ══ */}
      {SERVICES.map((svc, i) => (
        <div
          key={svc.id}
          id={`service-${svc.id}`}
          className={styles.servicePanel}
          style={{ display: activeService === i ? "block" : "none" }}
          role="tabpanel"
        >
          <div className={styles.container}>
            <div className={`${styles.serviceGrid} ${i % 2 === 1 ? styles.reverse : ""}`}>
              {/* Image Side */}
              <div className={styles.serviceImgWrapper}>
                <Image
                  src={svc.image}
                  alt={svc.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.serviceImgOverlay} />
                <div className={styles.serviceHudBadge}>
                  <div className={styles.hudMetricNum}>
                    {svc.metricNum}
                    <span className={styles.hudMetricUnit}>{svc.metricUnit}</span>
                  </div>
                  <div className={styles.hudDivider} />
                  <div className={styles.hudMetricLabel}>{svc.metricLabel}</div>
                </div>
              </div>

              {/* Content Side */}
              <div>
                <div className={styles.serviceContentKicker}>
                  <span className={styles.kickerSquare} />
                  LOGISTICS SOLUTION
                </div>
                <h2 className={styles.serviceTitle}>{svc.title}</h2>

                <div className={styles.tagRow}>
                  {svc.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                <p className={styles.serviceDesc}>{svc.desc}</p>

                <div className={styles.featuresGrid}>
                  {svc.features.map((f, fi) => (
                    <div key={fi} className={styles.featureItem}>
                      <div className={styles.featureIcon}>{f.icon}</div>
                      <div className={styles.featureTitle}>{f.title}</div>
                      <div className={styles.featureSub}>{f.sub}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.serviceCtaRow}>
                  <button
                    type="button"
                    className={styles.btnYellow}
                    onClick={() => setIsQuoteOpen(true)}
                  >
                    <span className={styles.btnSquare} />
                    START SHIPPING
                  </button>
                  <Link href="/track" className={styles.btnGhost}>
                    TRACK SHIPMENT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ══ HOW WE DELIVER (light bg) ══ */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <div className={styles.processSectionKicker}>
              <span className={styles.kickerSquare} style={{ background: "#F26A21" }} />
              HOW WE DELIVER
            </div>
            <h2 className={styles.processSectionTitle}>
              A simple process.
              <br />
              Every step covered.
            </h2>
          </div>

          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.index} className={styles.stepCard}>
                <div className={styles.stepIndex}>[{step.index}]</div>
                <div className={styles.stepTitle}>{step.title}</div>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ADDITIONAL SPECIALTIES (dark) ══ */}
      <section className={styles.specialtiesSection}>
        <div className={styles.container}>
          <div className={styles.specialtiesSectionKicker}>
            <span className={styles.kickerSquare} style={{ background: "#D9A926" }} />
            ADDITIONAL SPECIALTIES
          </div>
          <h2 className={styles.specialtiesSectionTitle}>
            Beyond the core —
            <br />
            specialist capabilities.
          </h2>

          <div className={styles.specialtiesGrid}>
            {SPECIALTIES.map((sp, i) => (
              <div key={i} className={styles.specialtyCard}>
                <div className={styles.specialtyIconRing}>{sp.icon}</div>
                <div className={styles.specialtyTitle}>{sp.title}</div>
                <p className={styles.specialtyDesc}>{sp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to move your cargo?</h2>
          <p className={styles.ctaSub}>
            Talk to a FOODBOX logistics specialist and get a freight solution
            tailored to your exact requirements.
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
            <Link href="/about" className={styles.btnGhost}>
              ABOUT FOODBOX
            </Link>
          </div>
        </div>
      </section>

      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
