"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./CtaSection.module.css";

interface CtaSectionProps {
  onOpenQuote?: () => void;
  onOpenTrack?: () => void;
}

export default function CtaSection({ onOpenQuote, onOpenTrack }: CtaSectionProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    serviceRequired: "road-freight",
    requirements: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        workEmail: "",
        phoneNumber: "",
        companyName: "",
        serviceRequired: "road-freight",
        requirements: "",
      });
    }, 5000);
  };

  return (
    <section className={styles.sectionWrapper} id="quote">
      {/* Background Photography & Cinematic Dusk Overlay */}
      <div className={styles.bgWrapper}>
        <Image
          src="/sea-freight.jpg"
          alt="Container terminal logistics depot yard"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Narrative & Direct Support Contact */}
          <div className={styles.leftCol}>
            <div className={styles.kicker}>
              <span className={styles.kickerDot} />
              START YOUR SHIPMENT
            </div>

            <h2 className={styles.heading}>
              Let&apos;s keep your
              <br />
              business moving
            </h2>

            <p className={styles.subtext}>
              TELL US WHAT YOU NEED TO MOVE, WHERE IT NEEDS TO GO, AND WHEN IT NEEDS TO ARRIVE.
              OUR LOGISTICS TEAM WILL REVIEW YOUR REQUIREMENTS AND PROVIDE A TAILORED SOLUTION.
            </p>

            <div className={styles.bottomCallout}>
              <span className={styles.calloutLabel}>PREFER TO SPEAK DIRECTLY WITH OUR TEAM?</span>
              <button
                type="button"
                className={styles.contactBtn}
                onClick={onOpenQuote}
                aria-label="Contact Support"
              >
                <span className={styles.btnDot} />
                CONTACT SUPPORT
              </button>
            </div>
          </div>

          {/* Right Column: Plan Your Next Shipment Glass Form Card */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>PLAN YOUR NEXT SHIPMENT</h3>

            {isSubmitted ? (
              <div className={styles.successBanner}>
                <div className={styles.successTitle}>Inquiry Dispatched Successfully</div>
                <div className={styles.successText}>
                  Thank you! Our dedicated logistics coordinator will review your route parameters
                  and deliver a comprehensive quote within 15 minutes.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Field 1: First Name */}
                <div className={styles.inputGroup}>
                  <label htmlFor="ctaFirstName" className={styles.inputLabel}>
                    FIRST NAME
                  </label>
                  <input
                    id="ctaFirstName"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className={styles.underlineInput}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>

                {/* Field 2 & 3: Work Email and Phone Number */}
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="ctaEmail" className={styles.inputLabel}>
                      WORK EMAIL
                    </label>
                    <input
                      id="ctaEmail"
                      type="email"
                      required
                      placeholder="name@company.com"
                      className={styles.underlineInput}
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="ctaPhone" className={styles.inputLabel}>
                      PHONE NUMBER
                    </label>
                    <input
                      id="ctaPhone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className={styles.underlineInput}
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    />
                  </div>
                </div>

                {/* Field 4: Company Name */}
                <div className={styles.inputGroup}>
                  <label htmlFor="ctaCompany" className={styles.inputLabel}>
                    COMPANY NAME
                  </label>
                  <input
                    id="ctaCompany"
                    type="text"
                    placeholder="e.g. Apex Global Industries"
                    className={styles.underlineInput}
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                {/* Field 5: Service Required */}
                <div className={styles.inputGroup}>
                  <label htmlFor="ctaService" className={styles.inputLabel}>
                    SERVICE REQUIRED
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="ctaService"
                      className={styles.underlineSelect}
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    >
                      <option value="road-freight">Road Freight Logistics (FTL / LTL)</option>
                      <option value="ocean-freight">Ocean &amp; Intermodal Freight (FCL / LCL)</option>
                      <option value="air-cargo">Expedited Air Cargo Express</option>
                      <option value="urban-courier">High-Speed Urban Moto Dispatch</option>
                      <option value="cold-chain">Temperature-Controlled Cold Chain</option>
                      <option value="custom-contract">Enterprise Dedicated Fleet Contract</option>
                    </select>
                    <span className={styles.selectChevron} />
                  </div>
                </div>

                {/* Field 6: Service Requirements / Notes */}
                <div className={styles.inputGroup}>
                  <label htmlFor="ctaRequirements" className={styles.inputLabel}>
                    ORIGIN &amp; DESTINATION / ROUTE DETAILS
                  </label>
                  <input
                    id="ctaRequirements"
                    type="text"
                    placeholder="e.g. Chicago, IL to Rotterdam, NL — 40ft High Cube"
                    className={styles.underlineInput}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  />
                </div>

                {/* Submit Action */}
                <div className={styles.actionRow}>
                  <button type="submit" className={styles.submitBtn}>
                    <span className={styles.submitDot} />
                    SUBMIT INQUIRY
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
