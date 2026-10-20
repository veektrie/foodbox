"use client";

import React from "react";
import Image from "next/image";
import styles from "./LogisticsSolutions.module.css";

interface LogisticsSolutionsProps {
  onOpenQuote?: () => void;
}

const SERVICES = [
  {
    index: "01",
    title: "Road freight",
    tags: ["DOMESTIC", "GROUND"],
    image: "/road-freight-depot.jpg",
    metricNum: "250",
    metricUnit: "+",
    metricLabel: "NATIONWIDE DELIVERY ROUTES",
    description:
      "Reliable ground transportation designed for efficient local, regional, and nationwide deliveries.",
    cta: "START SHIPPING",
    features: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
        title: "NATIONWIDE NETWORK",
        sub: "DEPENDABLE REGIONAL COVERAGE",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="1" y="3" width="15" height="13" rx="1" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        ),
        title: "FLEXIBLE CAPACITY",
        sub: "FTL & LTL TRANSPORT OPTIONS",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        ),
        title: "DEDICATED SUPPORT",
        sub: "RESPONSIVE SHIPMENT COORDINATION",
      },
    ],
  },
  {
    index: "02",
    title: "Sea freight",
    tags: ["GLOBAL", "CONTAINER"],
    image: "/sea-freight.jpg",
    metricNum: "120",
    metricUnit: "+",
    metricLabel: "GLOBAL PORT CONNECTIONS",
    description:
      "Cost-effective international freight solutions for businesses moving cargo across global shipping routes.",
    cta: "START SHIPPING",
    features: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
        title: "GLOBAL NETWORK",
        sub: "WORLDWIDE SHIPPING ROUTES",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        ),
        title: "CONTAINER OPTIONS",
        sub: "FCL & LCL SERVICES",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
        title: "CUSTOMS SUPPORT",
        sub: "SMOOTH BORDER CLEARANCE",
      },
    ],
  },
  {
    index: "03",
    title: "Air freight",
    tags: ["EXPRESS", "AIR CARGO"],
    image: "/air-cargo.jpg",
    metricNum: "24–48",
    metricUnit: "H",
    metricLabel: "EXPRESS CARGO DELIVERY",
    description:
      "Fast and secure air freight services for urgent, valuable, and time-sensitive cargo.",
    cta: "START SHIPPING",
    features: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7 4 8l6 4-4 4-3-1-1 1 2.5 2.5L7 21l1-1-1-3 4-4 4 6 1.2-1.3z" />
          </svg>
        ),
        title: "GLOBAL AIR NETWORK",
        sub: "MAJOR INTERNATIONAL TRADE LANES",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        title: "PRIORITY HANDLING",
        sub: "FAST & SECURE CARGO MOVEMENT",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
        title: "CUSTOMS COORDINATION",
        sub: "EFFICIENT CLEARANCE SUPPORT",
      },
    ],
  },
];

export default function LogisticsSolutions({ onOpenQuote }: LogisticsSolutionsProps) {
  return (
    <section className={styles.sectionWrapper} id="services">
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <div>
          <div className={styles.kickerTag}>
            <span className={styles.kickerSquare} />
            <span>Logistics Solutions.</span>
          </div>
          <h2 className={styles.mainHeading}>
            Whether you&apos;re shipping across the city<br />
            or across the world, we&apos;ve got you covered.
          </h2>
        </div>

        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.btnYellow}
            onClick={onOpenQuote}
          >
            <span className={styles.btnSquareDark} />
            GET A QUOTE
          </button>
          <a href="#track" className="btn btn-ghost">
            ABOUT US
          </a>
        </div>
      </div>

      {/* Stacked Service Rows */}
      <div className={styles.stackedRows}>
        {SERVICES.map((svc) => (
          <div key={svc.index} className={styles.serviceRow}>
            {/* ── Left: Image Panel (Separate Card with Space) ── */}
            <div className={styles.imagePanel}>
              {/* 4 Corner Markers */}
              <span className={`${styles.cardNode} ${styles.nodeTl}`} />
              <span className={`${styles.cardNode} ${styles.nodeTr}`} />
              <span className={`${styles.cardNode} ${styles.nodeBl}`} />
              <span className={`${styles.cardNode} ${styles.nodeBr}`} />

              <Image
                src={svc.image}
                alt={svc.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.cardPhoto}
              />
              <div className={styles.photoOverlay} />

              {/* HUD Stat Card */}
              <div className={styles.hudCard}>
                <span className={`${styles.hudNode} ${styles.nodeTl}`} />
                <span className={`${styles.hudNode} ${styles.nodeTr}`} />
                <span className={`${styles.hudNode} ${styles.nodeBl}`} />
                <span className={`${styles.hudNode} ${styles.nodeBr}`} />
                <div className={styles.hudMetric}>
                  {svc.metricNum}
                  <span className={styles.hudUnit}>{svc.metricUnit}</span>
                </div>
                <div className={styles.hudDivider} />
                <div className={styles.hudLabel}>{svc.metricLabel}</div>
              </div>
            </div>

            {/* ── Right: Content Panel (Separate Card with Space) ── */}
            <div className={styles.contentPanel}>
              {/* 4 Corner Markers */}
              <span className={`${styles.cardNode} ${styles.nodeTl}`} />
              <span className={`${styles.cardNode} ${styles.nodeTr}`} />
              <span className={`${styles.cardNode} ${styles.nodeBl}`} />
              <span className={`${styles.cardNode} ${styles.nodeBr}`} />

              <div>
                <div className={styles.topMeta}>
                  <span className={styles.indexBadge}>[{svc.index}]</span>
                  <div className={styles.tagsCluster}>
                    {svc.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>

                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.description}</p>

                {/* 3-col feature grid */}
                <div className={styles.featuresGrid}>
                  {svc.features.map((f, i) => (
                    <div key={i} className={styles.featureCol}>
                      <div className={styles.featureIcon}>{f.icon}</div>
                      <div className={styles.featureTitle}>{f.title}</div>
                      <div className={styles.featureSub}>{f.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Row with Yellow Button */}
              <div className={styles.ctaRow}>
                <button
                  type="button"
                  className={styles.btnYellow}
                  onClick={onOpenQuote}
                >
                  <span className={styles.btnSquareDark} />
                  {svc.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
