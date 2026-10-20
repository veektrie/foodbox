"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./CustomerReview.module.css";

interface CustomerReviewProps {
  onOpenQuote?: () => void;
}

const REVIEWS = [
  {
    quote:
      "“FOODBOX HAS MADE OUR LOGISTICS OPERATIONS FAR MORE RELIABLE. WE NOW HAVE CLEARER SHIPMENT VISIBILITY, FASTER COMMUNICATION, AND COMPLETE CONFIDENCE IN EVERY DELIVERY.”",
    name: "Adam Howarts",
    role: "OPERATIONS DIRECTOR",
    company: "Biostech",
    image: "/customer-review-director.jpg",
    statNum: "450 +",
    statLabel: "SHIPMENTS SUCCESSFULLY DELIVERED",
    tags: ["URBAN DISPATCH", "AIR FREIGHT", "SUPPLY CHAIN"],
  },
  {
    quote:
      "“THE SUB-60-MINUTE MOTO FLEET HAS TRANSFORMED OUR INTRA-CITY MEDICAL SAMPLE TRANSIT. ZERO DELAYS ACROSS TIME-CRITICAL CORRIDORS WITH COMPLETE TEMPERATURE SECURITY.”",
    name: "Elena Vance",
    role: "VP OF SUPPLY CHAIN",
    company: "Novagen Health",
    image: "/testimonial-female-vp.jpg",
    statNum: "99.8 %",
    statLabel: "ON-TIME DISPATCH ACCURACY",
    tags: ["URBAN DISPATCH", "PRIORITY ROUTING", "COLD CHAIN"],
  },
  {
    quote:
      "“SCHEDULED AIR CARGO ALLOCATIONS THROUGH FOODBOX CUT OUR TRANSATLANTIC CLEARANCE BOTTLENECK BY OVER 36 HOURS WITH COMPREHENSIVE CUSTOMS COMPLIANCE.”",
    name: "Marcus Thorne",
    role: "GLOBAL LOGISTICS LEAD",
    company: "AeroDynamics Corp",
    image: "/customer-review-director.jpg",
    statNum: "1,850 +",
    statLabel: "TONS EXPEDITED GLOBALLY",
    tags: ["AIR FREIGHT", "CUSTOMS BROKERAGE", "CHARTER"],
  },
  {
    quote:
      "“THE DUAL-SPEED INFRASTRUCTURE GIVES US END-TO-END TELEMETRY FROM AIRPORT RUNWAYS DIRECTLY DOWN TO DOWNTOWN TWO-WHEELER COURIERS IN REAL TIME.”",
    name: "Sophia Lin",
    role: "DIRECTOR OF PROCUREMENT",
    company: "Vertex Industrial",
    image: "/testimonial-female-vp.jpg",
    statNum: "24/7",
    statLabel: "DEDICATED OPERATIONS DESK",
    tags: ["RAPID DISPATCH", "TELEMETRY", "FLEET TRACKING"],
  },
];

export default function CustomerReview({ onOpenQuote }: CustomerReviewProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 6 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section className={styles.sectionWrapper} id="customer-reviews">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ─── Left Column: Header, Narrative & CTA ─── */}
          <div className={styles.leftCol}>
            <div className={styles.kicker}>
              <span className={styles.kickerSquare} />
              CUSTOMER REVIEW
            </div>

            <h2 className={styles.heading}>
              Trusted by businesses<br />
              that keep moving
            </h2>

            <p className={styles.subtext}>
              OUR CLIENTS TRUST US TO SIMPLIFY THEIR LOGISTICS, MAINTAIN
              DEPENDABLE TIMELINES, AND KEEP EVERY SHIPMENT MOVING WITH
              CONFIDENCE.
            </p>

            <button
              type="button"
              className={styles.ctaBtn}
              onClick={onOpenQuote}
            >
              <span className={styles.ctaSquare} />
              CONTACT FOODBOX
            </button>
          </div>

          {/* ─── Right Column: Clean Sliding Testimonial Card ─── */}
          <div
            className={styles.sliderContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Viewport for horizontal slide */}
            <div className={styles.trackViewport}>
              <div
                className={styles.track}
                style={{ transform: `translateX(-${activeIdx * 100}%)` }}
              >
                {REVIEWS.map((review, idx) => (
                  <div key={idx} className={styles.cardSlide}>
                    <div className={styles.cardContainer}>
                      {/* 4 Technical Corner Crosshair Nodes */}
                      <span className={`${styles.cornerNode} ${styles.cornerTl}`} />
                      <span className={`${styles.cornerNode} ${styles.cornerTr}`} />
                      <span className={`${styles.cornerNode} ${styles.cornerBl}`} />
                      <span className={`${styles.cornerNode} ${styles.cornerBr}`} />

                      <div className={styles.cardInner}>
                        {/* Left Photo & HUD Badge */}
                        <div className={styles.photoCol}>
                          <div className={styles.photoFrame}>
                            <Image
                              src={review.image}
                              alt={review.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 320px"
                              className={styles.portrait}
                              priority={idx === 0}
                            />
                            {/* Frosted HUD Badge on Photo */}
                            <div className={styles.photoHud}>
                              <div className={styles.hudStatNum}>
                                {review.statNum}
                              </div>
                              <div className={styles.hudDivider} />
                              <div className={styles.hudStatLabel}>
                                {review.statLabel}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Review Text & Metadata */}
                        <div className={styles.contentCol}>
                          {/* Main Quote */}
                          <blockquote className={styles.quoteText}>
                            {review.quote}
                          </blockquote>

                          {/* Author Info & Company Logo */}
                          <div className={styles.metaRow}>
                            <div className={styles.authorInfo}>
                              <div className={styles.authorName}>
                                {review.name}
                              </div>
                              <div className={styles.authorRole}>
                                {review.role}
                              </div>
                            </div>

                            <div className={styles.companyBadge}>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={styles.companyIcon}
                              >
                                <path
                                  d="M12 2L21 7.5V16.5L12 22L3 16.5V7.5L12 2Z"
                                  stroke="#0A0D14"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                />
                                <circle cx="12" cy="12" r="3" fill="#F26A21" />
                              </svg>
                              <span className={styles.companyName}>
                                {review.company}
                              </span>
                            </div>
                          </div>

                          {/* Service Category Badges */}
                          <div className={styles.tagsRow}>
                            {review.tags.map((tag) => (
                              <span key={tag} className={styles.tagBadge}>
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Navigation & Segmented Carousel Indicators */}
                          <div className={styles.bottomControls}>
                            <div className={styles.carouselProgress}>
                              {REVIEWS.map((_, pIdx) => (
                                <button
                                  key={pIdx}
                                  type="button"
                                  aria-label={`Slide to review ${pIdx + 1}`}
                                  className={[
                                    styles.segmentBar,
                                    activeIdx === pIdx
                                      ? styles.segmentActive
                                      : "",
                                  ].join(" ")}
                                  onClick={() => setActiveIdx(pIdx)}
                                />
                              ))}
                            </div>

                            <div className={styles.arrowBtns}>
                              <button
                                type="button"
                                onClick={handlePrev}
                                className={styles.arrowBtn}
                                aria-label="Previous testimonial"
                              >
                                ←
                              </button>
                              <button
                                type="button"
                                onClick={handleNext}
                                className={styles.arrowBtn}
                                aria-label="Next testimonial"
                              >
                                →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
