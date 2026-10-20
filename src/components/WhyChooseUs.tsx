"use client";

import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

const FEATURES = [
  {
    image: "/sea-freight.jpg",
    imageAlt: "Sea freight containers at commercial port",
    title: "Real-time tracking",
    desc: "MONITOR EVERY SHIPMENT WITH COMPLETE VISIBILITY.",
    tags: [
      "LIVE UPDATES",
      "SHIPMENT VISIBILITY",
      "ETA ALERTS",
      "ROUTE MONITORING",
      "DELIVERY PROOF",
      "STATUS REPORTS",
    ],
  },
  {
    image: "/aerial-containers.jpg",
    imageAlt: "Aerial view of shipping containers and transit lines",
    title: "Dedicated support",
    desc: "RESPONSIVE LOGISTICS SPECIALISTS WHENEVER YOU NEED ASSISTANCE.",
    tags: [
      "DEDICATED CONTACT",
      "FAST RESPONSE",
      "EXPERT ASSISTANCE",
      "CLEAR COMMUNICATION",
      "ISSUE RESOLUTION",
      "PROACTIVE UPDATES",
    ],
  },
  {
    image: "/air-cargo.jpg",
    imageAlt: "Air cargo plane on airport tarmac",
    title: "Reliable network",
    desc: "A TRUSTED TRANSPORTATION NETWORK ACROSS DOMESTIC AND INTERNATIONAL ROUTES.",
    tags: [
      "VERIFIED PARTNERS",
      "TRUSTED CARRIERS",
      "GLOBAL COVERAGE",
      "QUALITY CONTROL",
      "SECURE HANDLING",
      "CONSISTENT DELIVERY",
    ],
  },
  {
    image: "/hero-truck.jpg",
    imageAlt: "Freight logistics truck in highway transit",
    title: "Flexible solutions",
    desc: "CUSTOMIZED LOGISTICS STRATEGIES TAILORED TO YOUR BUSINESS.",
    tags: [
      "TAILORED PLANNING",
      "FLEXIBLE CAPACITY",
      "CUSTOM ROUTES",
      "SCALABLE SERVICES",
      "MULTI-MODAL OPTIONS",
      "BUSINESS FOCUS",
    ],
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.sectionWrapper} id="insights">
      <div className={styles.container}>
        {/* ─── Section Header: Kicker, Heading & Subtext ─── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.kicker}>
              <span className={styles.kickerSquare} />
              WHY CHOOSE FOODBOX
            </div>
            <h2 className={styles.heading}>
              Built for reliable<br />
              logistics.
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.subtext}>
              SUPPORTING DIVERSE INDUSTRIES WITH RELIABLE LOGISTICS, EFFICIENT
              TRANSPORTATION, AND SUPPLY CHAIN EXPERTISE.
            </p>
          </div>
        </div>

        {/* ─── 4-Card Bento Grid ─── */}
        <div className={styles.grid}>
          {FEATURES.map((item, index) => (
            <div key={index} className={styles.bentoCard}>
              {/* Left: Photography */}
              <div className={styles.photoPane}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                  className={styles.photo}
                  priority={index < 2}
                />
              </div>

              {/* Right: Technical Card Content */}
              <div className={styles.contentPane}>
                {/* 4 Technical Corner Crosshairs */}
                <span className={`${styles.cornerNode} ${styles.cornerTl}`} />
                <span className={`${styles.cornerNode} ${styles.cornerTr}`} />
                <span className={`${styles.cornerNode} ${styles.cornerBl}`} />
                <span className={`${styles.cornerNode} ${styles.cornerBr}`} />

                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>

                <div className={styles.tagsContainer}>
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tagPill}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
