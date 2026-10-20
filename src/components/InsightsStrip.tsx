"use client";

import React from "react";
import Link from "next/link";
import styles from "./InsightsStrip.module.css";

export const INSIGHTS_DATA = [
  {
    id: "intra-city-b2b",
    category: "URBAN DISPATCH",
    readTime: "3 MIN READ",
    title: "Optimizing Intra-City B2B Document Courier Routes",
    excerpt:
      "How algorithmic street-level waypoint batching and dedicated electric moto-lanes reduce urban legal and medical transit times by 42%.",
    date: "OCTOBER 2026",
  },
  {
    id: "dim-vs-actual-weight",
    category: "AIR FREIGHT",
    readTime: "4 MIN READ",
    title: "Dimensional Weight (DIM) vs. Actual Weight in International Air Shipping",
    excerpt:
      "Demystifying volumetric IATA ratios, high-density cargo consolidation, and avoiding unexpected tariff adjustments on cross-border flight legs.",
    date: "OCTOBER 2026",
  },
  {
    id: "cross-border-customs",
    category: "COMPLIANCE & BROKERAGE",
    readTime: "5 MIN READ",
    title: "Navigating Priority Cross-Border Customs Clearance",
    excerpt:
      "A pragmatic framework for pre-arrival electronic manifest declarations, harmonized tariff codes, and immediate tarmac duty discharge.",
    date: "SEPTEMBER 2026",
  },
];

export default function InsightsStrip() {
  return (
    <section className={styles.sectionWrapper} id="insights">
      <div className={styles.innerContainer}>
        <div className={styles.topRow}>
          <div className={styles.titleBlock}>
            <div className={styles.tag}>Operational Intelligence</div>
            <h2 className={styles.heading}>The Logistics Engineering Playbook</h2>
          </div>

          <a href="#track" className={styles.linkAll}>
            <span>View all operational playbooks</span>
            <span>→</span>
          </a>
        </div>

        <div className={styles.insightsGrid}>
          {INSIGHTS_DATA.map((item) => (
            <div
              key={item.id}
              className={styles.card}
            >
              <div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>{item.category}</span>
                  <span className={styles.readTime}>{item.readTime}</span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardExcerpt}>{item.excerpt}</p>
              </div>

              <div className={styles.cardFooter}>
                <span>{item.date}</span>
                <span style={{ color: "var(--color-brand-primary)", fontWeight: 600 }}>Technical Brief</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
