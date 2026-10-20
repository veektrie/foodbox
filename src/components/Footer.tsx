"use client";

import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  onOpenTrack?: () => void;
  onOpenQuote?: () => void;
}

export default function Footer({ onOpenTrack, onOpenQuote }: FooterProps) {
  return (
    <footer className={styles.footer} id="footer">
      {/* Background Ambience / Subtle Grid Watermark */}
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        {/* ─── Top Section: CTA + Company Navigation ─── */}
        <div className={styles.topSection}>
          {/* Left: Kicker + Heading + CTA */}
          <div className={styles.topLeft}>
            <div className={styles.kicker}>
              <span className={styles.kickerSquare} />
              LETS START SHIPPING
            </div>
            <h2 className={styles.heading}>
              Reliable logistics,<br />
              delivered with clarity
            </h2>
            <button
              type="button"
              className={styles.contactBtn}
              onClick={onOpenQuote}
            >
              <span className={styles.btnSquare} />
              CONTACT OUR TEAM
            </button>
          </div>

          {/* Right: Company Main Links */}
          <div className={styles.topRight}>
            <div className={styles.colLabel}>COMPANY</div>
            <nav className={styles.companyNav}>
              <a href="#how-we-deliver" className={styles.companyLink}>
                ABOUT
              </a>
              <a href="#services" className={styles.companyLink}>
                SERVICES
              </a>
              <a href="#services" className={styles.companyLink}>
                INDUSTRIES
              </a>
              <a href="#insights" className={styles.companyLink}>
                CAREERS
              </a>
            </nav>
          </div>
        </div>

        {/* ─── Thin Horizontal Divider ─── */}
        <div className={styles.divider} />

        {/* ─── Middle Section: Link Matrices + Contact ─── */}
        <div className={styles.middleSection}>
          <div className={styles.linksGroup}>
            {/* Column 1: Support */}
            <div className={styles.linkCol}>
              <div className={styles.colLabel}>SUPPORT</div>
              <ul className={styles.linkList}>
                <li>
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className={styles.textBtn}
                  >
                    CONTACT
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenTrack}
                    className={styles.textBtn}
                  >
                    TRACK SHIPMENT
                  </button>
                </li>
                <li>
                  <a href="#insights" className={styles.textLink}>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Social */}
            <div className={styles.linkCol}>
              <div className={styles.colLabel}>SOCIAL</div>
              <ul className={styles.linkList}>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textLink}
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textLink}
                  >
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textLink}
                  >
                    YOUTUBE
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className={styles.linkCol}>
              <div className={styles.colLabel}>LEGAL</div>
              <ul className={styles.linkList}>
                <li>
                  <a href="#track" className={styles.textLink}>
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a href="#track" className={styles.textLink}>
                    TERMS &amp; CONDITIONS
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Direct Contact Info */}
          <div className={styles.contactCol}>
            <div className={styles.contactItem}>
              <div className={styles.colLabel}>EMAIL</div>
              <a
                href="mailto:contact@foodbox.com"
                className={styles.contactValue}
              >
                contact@foodbox.com
              </a>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.colLabel}>PHONE</div>
              <a href="tel:+102312231932" className={styles.contactValue}>
                +1 023 1223 1932
              </a>
            </div>
          </div>
        </div>

        {/* ─── Bottom Section: Giant Wordmark + Copyright ─── */}
        <div className={styles.bottomSection}>
          <div className={styles.hugeWordmark}>
            FOODBOX
          </div>
          <div className={styles.copyright}>
            FOODBOX. COPYRIGHT &copy; {new Date().getFullYear()}. ALL RIGHT RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
