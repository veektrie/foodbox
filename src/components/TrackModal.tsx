"use client";

import React, { useState, useEffect } from "react";
import styles from "./TrackModal.module.css";

interface TrackModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode?: string;
  initialMode?: "urban" | "air";
}

export default function TrackModal({
  isOpen,
  onClose,
  initialCode = "MOTO-892-NY",
  initialMode = "urban",
}: TrackModalProps) {
  const [trackingCode, setTrackingCode] = useState(initialCode);
  const [mode, setMode] = useState<"urban" | "air">(initialMode);
  const [searched, setSearched] = useState(true);

  useEffect(() => {
    if (initialCode) {
      setTrackingCode(initialCode);
      setMode(initialMode);
    }
  }, [initialCode, initialMode]);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const upper = trackingCode.trim().toUpperCase();
    const isUrban =
      upper.startsWith("MOTO") ||
      upper.startsWith("RIDER") ||
      upper.startsWith("CITY") ||
      /^[0-9]{4,6}$/.test(upper);

    setMode(isUrban ? "urban" : "air");
    setSearched(true);
  };

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.title}>
              {mode === "urban" ? "Urban Moto Live Telemetry" : "International Air Cargo AWB"}
            </h2>
            <p className={styles.subtitle}>
              {mode === "urban"
                ? "Direct Rider GPS & SMS Custody Verification"
                : "IATA Air Waybill & Customs Clearance Radar"}
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <form onSubmit={handleSearch} className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            placeholder="Enter MOTO-ID or Air Waybill AWB..."
            required
          />
          <button type="submit" className="btn btn-primary">
            <span className="btn-icon-square" />
            Scan Terminal
          </button>
        </form>

        {searched && (
          <div className={styles.telemetryBox}>
            {mode === "urban" ? (
              /* Urban Two-Wheeler Telemetry */
              <>
                <div className={styles.telemetryGrid}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Dispatch Status</span>
                    <span
                      className={styles.metricValue}
                      style={{ color: "#10B981", display: "flex", alignItems: "center", gap: "6px" }}
                    >
                      <span className="beacon-dot" /> RIDER EN ROUTE
                    </span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Assigned Courier</span>
                    <span className={styles.metricValue}>Alex R. (Moto-Unit #402)</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Vehicle Fleet</span>
                    <span className={styles.metricValue}>SuperSOCO TC-Max (Electric)</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Pannier Temp / Seal</span>
                    <span className={styles.metricValue}>+4.0 °C (Tamper-Locked)</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Client SMS Token</span>
                    <span className={styles.metricValue} style={{ color: "var(--color-brand-primary)" }}>
                      #VERIFY-9281
                    </span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Metro ETA</span>
                    <span className={styles.metricValue}>14 MINUTES</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span className={styles.metricTitle}>Intra-City Delivery Leg</span>
                    <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-brand-primary)" }}>
                      82% Complete (1.8 km to Dropoff)
                    </span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: "82%" }} />
                  </div>
                  <div className={styles.progressLabels}>
                    <span>Financial District (Pickup 11:20)</span>
                    <span>Midtown Tech Campus (Dropoff)</span>
                  </div>
                </div>
              </>
            ) : (
              /* International Air Cargo Telemetry */
              <>
                <div className={styles.telemetryGrid}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Air Freight Status</span>
                    <span
                      className={styles.metricValue}
                      style={{ color: "#10B981", display: "flex", alignItems: "center", gap: "6px" }}
                    >
                      <span className="beacon-dot" /> FLIGHT IN TRANSIT
                    </span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Flight Number</span>
                    <span className={styles.metricValue}>LH-Cargo 8240 (B777-F)</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Cruising Altitude</span>
                    <span className={styles.metricValue}>35,000 FT (Mach 0.84)</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Customs Declaration</span>
                    <span className={styles.metricValue} style={{ color: "#10B981" }}>
                      CLEARED (Pre-Arrival Tarmac)
                    </span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Pallet Weight</span>
                    <span className={styles.metricValue}>340.5 KG (LD3 Container)</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricTitle}>Runway Touchdown</span>
                    <span className={styles.metricValue}>TODAY 17:30 CET</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span className={styles.metricTitle}>Transatlantic Air Corridor</span>
                    <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-brand-primary)" }}>
                      68% Flown (1,840 NM completed)
                    </span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: "68%" }} />
                  </div>
                  <div className={styles.progressLabels}>
                    <span>JFK International (New York)</span>
                    <span>Frankfurt Main FRA (Gate V104)</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>
            Satellite & IoT Telemetry Sync: Every 1.2s
          </div>
          <button type="button" className="btn btn-dark" onClick={onClose}>
            Close HUD
          </button>
        </div>
      </div>
    </div>
  );
}
