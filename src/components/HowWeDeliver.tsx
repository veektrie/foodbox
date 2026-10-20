"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./HowWeDeliver.module.css";

interface HowWeDeliverProps {
  onOpenQuote?: () => void;
}

const STEPS = [
  {
    index: "[01]",
    title: "Request a Quote",
    desc: "Share your shipment details, cargo requirements, destination, and preferred delivery schedule with our team.",
    image: "/aerial-containers.jpg",
    imageAlt: "Aerial view of shipping containers",
  },
  {
    index: "[02]",
    title: "Plan the Shipment",
    desc: "We determine the most efficient route, transportation method, timeline, and handling requirements for your cargo.",
    image: "/road-freight-depot.jpg",
    imageAlt: "Road freight depot planning",
  },
  {
    index: "[03]",
    title: "Move and Track",
    desc: "Your shipment moves through our trusted network with clear updates and real-time visibility throughout transit.",
    image: "/hero-truck.jpg",
    imageAlt: "Truck in transit on open highway",
  },
  {
    index: "[04]",
    title: "Deliver with Confidence",
    desc: "We coordinate the final delivery to ensure your shipment arrives safely, securely, and according to schedule.",
    image: "/air-cargo.jpg",
    imageAlt: "Air cargo delivery at airport",
  },
];

export default function HowWeDeliver({ onOpenQuote }: HowWeDeliverProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className={styles.sectionWrapper} id="how-we-deliver">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── Left: Text + Steps ── */}
          <div className={styles.leftCol}>
            <div className={styles.headerBlock}>
              {/* Kicker */}
              <div className={styles.kicker}>
                <span className={styles.kickerSquare} />
                HOW WE DELIVER
              </div>

              {/* Headline */}
              <h2 className={styles.heading}>
                A Simple process. Every<br />
                step covered.
              </h2>

              {/* Subtext */}
              <p className={styles.subtext}>
                WE SIMPLIFY COMPLEX LOGISTICS THROUGH A STREAMLINED PROCESS
                THAT KEEPS YOUR SHIPMENTS MOVING EFFICIENTLY FROM ORIGIN TO
                DESTINATION.
              </p>

              {/* CTA */}
              <button
                type="button"
                className={styles.ctaBtn}
                onClick={onOpenQuote}
              >
                <span className={styles.ctaSquare} />
                START SHIPPING
              </button>
            </div>

            {/* Process Steps */}
            <div className={styles.steps}>
              {STEPS.map((step, i) => (
                <div
                  key={step.index}
                  className={[
                    styles.step,
                    activeStep === i ? styles.stepActive : "",
                    activeStep !== null && activeStep !== i ? styles.stepDimmed : "",
                  ].join(" ")}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <span
                    className={[
                      styles.stepIndex,
                      activeStep === i ? styles.stepIndexActive : "",
                    ].join(" ")}
                  >
                    {step.index}
                  </span>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitle}>{step.title}</div>
                    <div className={styles.stepDesc}>{step.desc}</div>
                  </div>

                  {/* Arrow indicator — appears on hover */}
                  <div
                    className={[
                      styles.stepArrow,
                      activeStep === i ? styles.stepArrowVisible : "",
                    ].join(" ")}
                  >
                    →
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image container aligned with left column ── */}
          <div className={styles.rightCol}>
            {/* Stack all images, fade active one in */}
            {STEPS.map((step, i) => (
              <div
                key={step.index}
                className={[
                  styles.imageLayer,
                  (activeStep === i || (activeStep === null && i === 0))
                    ? styles.imageLayerVisible
                    : "",
                ].join(" ")}
              >
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.photo}
                  priority={i === 0}
                />
              </div>
            ))}

            <div className={styles.photoOverlay} />

            {/* HUD Stats Bar */}
            <div className={styles.hudBar}>
              {/* 6 Technical Marker Dots */}
              <span className={`${styles.marker} ${styles.markerTl}`} />
              <span className={`${styles.marker} ${styles.markerTc}`} />
              <span className={`${styles.marker} ${styles.markerTr}`} />
              <span className={`${styles.marker} ${styles.markerBl}`} />
              <span className={`${styles.marker} ${styles.markerBc}`} />
              <span className={`${styles.marker} ${styles.markerBr}`} />

              <div className={styles.hudStat}>
                <div className={styles.hudNum}>
                  98 <span className={styles.hudNumUnit}>%</span>
                </div>
                <div className={styles.hudDivider} />
                <div className={styles.hudLabel}>
                  ON-TIME DELIVERY<br />RATE
                </div>
              </div>
              <div className={styles.hudStat}>
                <div className={styles.hudNum}>24/7</div>
                <div className={styles.hudDivider} />
                <div className={styles.hudLabel}>
                  REAL-TIME SHIPMENT<br />TRACKING
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
