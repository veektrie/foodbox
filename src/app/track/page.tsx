"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import QuoteModal from "@/components/QuoteModal";
import WarriMap from "@/components/WarriMap";
import styles from "./track.module.css";

export default function TrackPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotLiveModal, setShowNotLiveModal] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNotLiveModal(true);
  };

  const handleCopyId = () => {
    navigator.clipboard?.writeText("#FB-WR-9876543210");
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ─── Standard Floating Landing Page Navbar (Identical to Landing Page) ── */}
      <Navbar
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* ─── Main Content Canvas (Apple-style Squircle Canvas) ─────────────── */}
      <main className={styles.mainContainer}>
        <div className={styles.canvasCard}>
          {/* Canvas Header */}
          <div className={styles.canvasHeader}>
            <h1 className={styles.canvasTitle}>Shipment Tracking</h1>
            <button
              type="button"
              className={styles.headerCtaBtn}
              onClick={() => setShowNotLiveModal(true)}
            >
              <span>+</span> Add New Shipping
            </button>
          </div>

          {/* Dashboard Split Body: Left List + Right Warri Delta State Map */}
          <div className={styles.dashboardBody}>
            {/* ─── Left Sidebar: Search & Active Shipment Timeline ── */}
            <aside className={styles.sidebarCol}>
              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit} className={styles.searchBox}>
                <svg
                  className={styles.searchIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Shipping ID (e.g. #FB-WR-987...)"
                  className={styles.searchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className={styles.filterBtn}
                  aria-label="Filter shipments"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                </button>
              </form>

              {/* Shipments Stack */}
              <div className={styles.shipmentsStack}>
                {/* Collapsed Card 1: Delivered */}
                <div
                  className={styles.shipmentCard}
                  onClick={() => setShowNotLiveModal(true)}
                  role="button"
                  tabIndex={0}
                >
                  <div className={styles.cardLeft}>
                    <div className={styles.truckIconBadge}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="3" width="15" height="13" rx="2" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </div>
                    <div className={styles.cardInfo}>
                      <span className={styles.cardLabel}>Shipping ID</span>
                      <span className={styles.cardId}>#FB-WR-4981241965</span>
                    </div>
                  </div>
                  <div className={styles.cardRight}>
                    <span className={`${styles.statusPill} ${styles.statusShipped}`}>
                      Shipped
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Expanded Card 2: Active Shipment (In Transit across Warri, Delta State) */}
                <div className={styles.activeCard}>
                  <div className={styles.activeHeader}>
                    <div className={styles.cardLeft}>
                      <div className={styles.truckActiveBadge}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="1" y="3" width="15" height="13" rx="2" />
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                          <circle cx="5.5" cy="18.5" r="2.5" />
                          <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                      </div>
                      <div className={styles.cardInfo}>
                        <span className={styles.cardLabel}>Shipping ID</span>
                        <span className={styles.cardId}>#FB-WR-9876543210</span>
                      </div>
                    </div>
                    <div className={styles.cardRight}>
                      <span className={`${styles.statusPill} ${styles.statusInTransit}`}>
                        In Transit
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00875A" strokeWidth="2.5">
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </div>
                  </div>

                  {/* Warri Delta State Real-Time Journey Steps */}
                  <div className={styles.timeline}>
                    {/* Step 1 */}
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDot}>
                        <span className={styles.dotInner} style={{ backgroundColor: "#94A3B8" }} />
                      </div>
                      <div className={styles.timelineContent}>
                        <span className={styles.timelineTime}>20 Oct 2026, 09:15</span>
                        <span className={styles.timelineText}>Package picked up at port</span>
                        <span className={styles.timelineLocation}>NPA Commercial Port, Warri</span>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDot}>
                        <span className={styles.dotInner} style={{ backgroundColor: "#94A3B8" }} />
                      </div>
                      <div className={styles.timelineContent}>
                        <span className={styles.timelineTime}>20 Oct 2026, 11:30</span>
                        <span className={styles.timelineText}>Package in transit</span>
                        <span className={styles.timelineLocation}>Enerhen Junction &amp; Sapele Rd Hub</span>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDot}>
                        <span className={styles.dotInner} style={{ backgroundColor: "#94A3B8" }} />
                      </div>
                      <div className={styles.timelineContent}>
                        <span className={styles.timelineTime}>20 Oct 2026, 13:45</span>
                        <span className={styles.timelineText}>Package in transit</span>
                        <span className={styles.timelineLocation}>Effurun Roundabout Facility, Warri</span>
                      </div>
                    </div>

                    {/* Step 4 (Active Current Point) */}
                    <div className={styles.timelineItem}>
                      <div className={`${styles.timelineDot} ${styles.dotActive}`}>
                        <span className={styles.dotInner} />
                      </div>
                      <div className={styles.timelineContent}>
                        <span className={styles.timelineTime}>20 Oct 2026, 15:10</span>
                        <span className={styles.timelineText} style={{ fontWeight: 700, color: "#00875A" }}>
                          In transit to final destination
                        </span>
                        <span className={styles.timelineLocation}>Refinery Road, Ekpan / Warri</span>
                      </div>
                    </div>
                  </div>

                  {/* Carrier / Driver Card */}
                  <div className={styles.carrierBox}>
                    <div className={styles.carrierLeft}>
                      <div className={styles.carrierAvatar}>DL</div>
                      <div className={styles.cardInfo}>
                        <span className={styles.carrierLabel}>Carrier</span>
                        <span className={styles.carrierName}>Devon Lane (Delta Fleet)</span>
                      </div>
                    </div>
                    <div className={styles.carrierActions}>
                      <button
                        type="button"
                        className={styles.iconCircleBtn}
                        onClick={() => setShowNotLiveModal(true)}
                        aria-label="Call carrier"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className={styles.iconCircleBtn}
                        onClick={() => setShowNotLiveModal(true)}
                        aria-label="Message carrier"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Collapsed Card 3: Pending */}
                <div
                  className={styles.shipmentCard}
                  onClick={() => setShowNotLiveModal(true)}
                  role="button"
                  tabIndex={0}
                >
                  <div className={styles.cardLeft}>
                    <div className={styles.truckIconBadge}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="3" width="15" height="13" rx="2" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </div>
                    <div className={styles.cardInfo}>
                      <span className={styles.cardLabel}>Shipping ID</span>
                      <span className={styles.cardId}>#FB-WR-1683513014</span>
                    </div>
                  </div>
                  <div className={styles.cardRight}>
                    <span className={`${styles.statusPill} ${styles.statusPending}`}>
                      Pending
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>
            </aside>

            {/* ─── Right Area: Interactive Warri Delta State Map ──── */}
            <section className={styles.mapCol}>
              {/* Top Tag: Warri, Delta State Nigeria */}
              <div className={styles.mapOverlayTag}>
                <span className={styles.mapTagDot} />
                <span className={styles.mapTagText}>
                  Warri, Delta State • 5.545°N, 5.765°E
                </span>
              </div>

              {/* Map Layer Canvas */}
              <div className={styles.mapContainer}>
                <WarriMap />
              </div>

              {/* Right Floating Metric Cards (From Dribbble Screenshot) */}
              <div className={styles.floatingMetrics}>
                <div className={styles.metricCard}>
                  <span className={styles.metricCardLabel}>Total Distance</span>
                  <div className={styles.metricCardValue}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00875A" strokeWidth="2.5">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    24.8 km
                  </div>
                </div>

                <div className={styles.metricCard}>
                  <span className={styles.metricCardLabel}>Est. Delivery Time</span>
                  <div className={styles.metricCardValue}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00875A" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    42 mins
                  </div>
                </div>

                <div className={styles.metricCard}>
                  <span className={styles.metricCardLabel}>Total Weight</span>
                  <div className={styles.metricCardValue}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00875A" strokeWidth="2.5">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    14.5 kg
                  </div>
                </div>
              </div>

              {/* Floating Bottom Live Tracking Card (Matching Dribbble Spec) */}
              <div className={styles.liveTrackingCard}>
                <div className={styles.liveCardHeader}>
                  <div className={styles.liveCardTitleRow}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00875A" strokeWidth="2.5">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    <span className={styles.liveTitle}>Live Shipment Tracking</span>
                  </div>
                  <button
                    type="button"
                    className={styles.closeCardBtn}
                    onClick={() => setShowNotLiveModal(true)}
                    aria-label="Options"
                  >
                    ×
                  </button>
                </div>

                <div className={styles.liveSubRow}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>Shipping ID:</span>
                    <span className={styles.liveId}>#FB-WR-9876543210</span>
                    <button
                      type="button"
                      onClick={handleCopyId}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#64748B", display: "flex" }}
                      aria-label="Copy Tracking ID"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    </button>
                    {copiedId && <span style={{ fontSize: "10px", color: "#00875A", fontWeight: 700 }}>Copied!</span>}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>Shipping Status:</span>
                    <span className={`${styles.statusPill} ${styles.statusInTransit}`}>
                      In Transit
                    </span>
                  </div>
                </div>

                <div className={styles.routePointsRow}>
                  <div>
                    <span style={{ color: "#64748B" }}>Departure:</span>{" "}
                    <strong>NPA Commercial Port, Warri</strong>
                  </div>
                  <div>
                    <span style={{ color: "#64748B" }}>Destination:</span>{" "}
                    <strong>Refinery Road, Ekpan / Warri</strong>
                  </div>
                </div>

                {/* Animated Progress Track */}
                <div className={styles.progressTrackWrapper}>
                  <div className={styles.progressTrackFill} />
                  <div className={styles.truckProgressIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect x="1" y="3" width="15" height="13" rx="2" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>
                </div>

                <div className={styles.timestampRow}>
                  <span>Package Shipped: 20-10-2026, 09:15</span>
                  <span>Estimated Arrival: Today, 16:30</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ─── "Feature Not Live Yet" Popup Modal ─────────────────────────────── */}
      {showNotLiveModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowNotLiveModal(false)}>
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setShowNotLiveModal(false)}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className={styles.modalBadgeRow}>
              <span className={styles.betaBadge}>SYSTEM NOTICE</span>
              <span style={{ fontSize: "11px", color: "#94A3B8" }}>Delta State Fleet Telemetry</span>
            </div>

            <div className={styles.radarIconBox}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a10 10 0 0 1 10 10" />
                <path d="M12 6a6 6 0 0 1 6 6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>

            <h2 className={styles.modalTitle}>This Feature Is Not Live Yet</h2>

            <p className={styles.modalDescription}>
              Our real-time IoT satellite and GPS tracking system for <strong>Warri &amp; Delta State</strong> dispatch routes is currently in closed beta calibration.
              <br /><br />
              Public real-time tracking will be available soon. For immediate status updates or manual consignment confirmation on any active shipment across Warri, Effurun, or Udu, our 24/7 Delta Dispatch coordinator is available directly.
            </p>

            <div className={styles.modalLocationNote}>
              <span style={{ color: "#D9A926" }}>●</span>
              <span>Regional Coverage: Warri, Effurun, Sapele Rd, DSC Expressway &amp; NPA Port Hub</span>
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.modalPrimaryBtn}
                onClick={() => setIsSubscribed(true)}
              >
                {isSubscribed ? "✓ Subscribed for Launch!" : "NOTIFY ME WHEN LIVE"}
              </button>
              <button
                type="button"
                className={styles.modalSecondaryBtn}
                onClick={() => setShowNotLiveModal(false)}
              >
                GOT IT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
