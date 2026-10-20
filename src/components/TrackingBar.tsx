"use client";

import React, { useState } from "react";
import styles from "./TrackingBar.module.css";

interface TrackingBarProps {
  onTrack: (code: string, mode: "urban" | "air") => void;
}

export default function TrackingBar({ onTrack }: TrackingBarProps) {
  const [query, setQuery] = useState("");

  const resolveAndTrack = (rawCode: string) => {
    const trimmed = rawCode.trim();
    if (!trimmed) return;

    // Resolver logic: Check whether it's Urban rider ID or Air Waybill
    const upper = trimmed.toUpperCase();
    const isUrban =
      upper.startsWith("MOTO") ||
      upper.startsWith("RIDER") ||
      upper.startsWith("CITY") ||
      /^[0-9]{4,6}$/.test(upper);

    const mode = isUrban ? "urban" : "air";
    onTrack(trimmed, mode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resolveAndTrack(query);
  };

  return (
    <section className={styles.trackingSection} id="track">
      <div className={styles.terminalWrapper}>
        <div className={styles.terminalHeader}>
          <div>
            <div className="tech-label" style={{ color: "var(--color-brand-primary)", marginBottom: "6px" }}>
              Unified Telemetry Interface
            </div>
            <h2 className={styles.terminalTitle}>
              <span className="beacon-dot" />
              Live Chain of Custody Terminal
            </h2>
          </div>
          <div className={styles.terminalSub}>
            Autonomous Auto-Resolver: Urban Moto ↔ Air Waybill (AWB)
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.terminalFrame}>
          <div className={styles.terminalPrefix}>
            <span>FBX://</span>
          </div>

          <input
            type="text"
            className={styles.terminalInput}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter Urban Rider ID (e.g. MOTO-892) or International Air Waybill (e.g. AWB-020-8841)..."
            required
          />

          <button
            type="submit"
            className={`btn btn-primary ${styles.terminalAction}`}
          >
            <span className="btn-icon-square" />
            TRACK SHIPMENT
          </button>
        </form>

        <div className={styles.chipsRow}>
          <span>Try verified test corridors:</span>
          <button
            type="button"
            className={styles.chipBtn}
            onClick={() => {
              setQuery("MOTO-892-NY");
              resolveAndTrack("MOTO-892-NY");
            }}
          >
            🛵 MOTO-892-NY (Urban Rapid)
          </button>
          <button
            type="button"
            className={styles.chipBtn}
            onClick={() => {
              setQuery("AWB-020-884192");
              resolveAndTrack("AWB-020-884192");
            }}
          >
            ✈️ AWB-020-884192 (Frankfurt Cargo)
          </button>
          <button
            type="button"
            className={styles.chipBtn}
            onClick={() => {
              setQuery("RIDER-402-LDN");
              resolveAndTrack("RIDER-402-LDN");
            }}
          >
            🛵 RIDER-402-LDN (London Metro)
          </button>
        </div>
      </div>
    </section>
  );
}
