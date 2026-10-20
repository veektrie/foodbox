"use client";

import React, { useState } from "react";
import styles from "./QuoteModal.module.css";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [serviceType, setServiceType] = useState<"urban" | "air">("urban");
  const [origin, setOrigin] = useState("Downtown Financial District");
  const [destination, setDestination] = useState("Midtown Enterprise Tower");
  const [parcelType, setParcelType] = useState("Envelope / Document");
  const [weightKg, setWeightKg] = useState(25);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Dynamic estimate calculation based on dual speed
  const bikeBase = parcelType === "Envelope / Document" ? 18 : parcelType === "Small Box < 5kg" ? 28 : 45;
  const airTotal = Math.round(180 + weightKg * 4.8);
  const totalEstimate = serviceType === "urban" ? bikeBase : airTotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.title}>FOODBOX Instant Rate Engine</h2>
            <p className={styles.subtitle}>Dual-Speed Urban Moto & International Air Freight</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                color: "#10B981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                fontSize: "24px",
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>
              Rate Confirmed & Space Locked
            </h3>
            <p style={{ fontSize: "13px", color: "var(--color-muted-text)", marginBottom: "20px" }}>
              Reference booking: <strong style={{ color: "#FFF" }}>FBX-{Math.floor(100000 + Math.random() * 900000)}</strong>.
              {serviceType === "urban"
                ? " A nearby moto-rider has been alerted and will arrive at pickup within 12-18 minutes."
                : " Air waybill manifest generated. Airport transfer scheduled."}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Service Mode</label>
                <select
                  className={styles.select}
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value as "urban" | "air")}
                >
                  <option value="urban">Urban Two-Wheeler Rapid Dispatch (&lt; 60m)</option>
                  <option value="air">International Air Freight & Customs Forwarding</option>
                </select>
              </div>

              {serviceType === "urban" ? (
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Parcel Classification</label>
                  <select
                    className={styles.select}
                    value={parcelType}
                    onChange={(e) => setParcelType(e.target.value)}
                  >
                    <option value="Envelope / Document">Envelope / Document</option>
                    <option value="Small Box < 5kg">Small Box (&lt; 5kg)</option>
                    <option value="Cargo Box < 25kg">Cargo Box (&lt; 25kg)</option>
                  </select>
                </div>
              ) : (
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Gross Weight (KG)</label>
                  <input
                    type="number"
                    className={styles.input}
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value) || 1)}
                    min={1}
                    max={5000}
                  />
                </div>
              )}

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Origin Address / Airport</label>
                <input
                  type="text"
                  className={styles.input}
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Street or Airport Code"
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Destination Address / Country</label>
                <input
                  type="text"
                  className={styles.input}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Destination Address or Country"
                  required
                />
              </div>
            </div>

            <div className={styles.estimateBox}>
              <div>
                <div className={styles.estimateLabel}>
                  {serviceType === "urban" ? "Guaranteed Metro Flat Rate" : "Direct Air Corridor Rate"}
                </div>
                <div className={styles.estimateValue}>${totalEstimate.toLocaleString()}.00</div>
              </div>
              <div className={styles.estimateDetails}>
                <div>
                  {serviceType === "urban" ? "Transit SLA: < 45 Mins" : "Transit SLA: 24h - 48h Direct Flight"}
                </div>
                <div>SMS Verification Included</div>
                <div>Live GPS Telematics Active</div>
              </div>
            </div>

            <div className={styles.actionRow}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                <span className="btn-icon-square" />
                {serviceType === "urban" ? "Dispatch Rider Now →" : "Book Air Space →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
