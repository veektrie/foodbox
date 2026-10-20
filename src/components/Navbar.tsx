"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenQuote?: () => void;
  onOpenTrack?: () => void;
}

export default function Navbar({ onOpenQuote, onOpenTrack }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Brand Logo: Angled dual-facet mark from reference image + FOODBOX */}
      <Link href="/" className={styles.logo} aria-label="FOODBOX Home">
        <div className={styles.logoIcon}>
          <svg
            width="28"
            height="22"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top angled parallelogram (Industrial Orange) */}
            <path
              d="M10 2L28 2L22 12L4 12Z"
              fill="#F26A21"
            />
            {/* Bottom angled parallelogram (Slate Grey) */}
            <path
              d="M8 14L26 14L20 24L2 24Z"
              fill="#94A3B8"
            />
          </svg>
        </div>
        <span className={styles.brandText}>
          FOOD<span className={styles.brandAccent}>BOX</span>
        </span>
      </Link>

      {/* Floating Center Nav Capsule (Reference Image) */}
      <nav className={styles.navContainer} aria-label="Main Navigation">
        <a href="#about" className={styles.navLink}>
          ABOUT US
        </a>
        <a href="#services" className={styles.navLink}>
          OUR SERVICES
        </a>
        <a href="#why-us" className={styles.navLink}>
          WHY US
        </a>
        <a href="#industries" className={styles.navLink}>
          INDUSTRIES
        </a>
        <button
          type="button"
          onClick={onOpenTrack}
          className={styles.navLink}
        >
          TRACK SHIPMENT
        </button>
      </nav>

      {/* Far Right Action CTA: White button with black square icon (Reference Image) */}
      <div className={styles.headerRight}>
        <button
          type="button"
          onClick={onOpenQuote}
          className="btn btn-white"
        >
          <span className="btn-icon-square" />
          GET A QUOTE
        </button>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <a
            href="#about"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            ABOUT US
          </a>
          <a
            href="#services"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            OUR SERVICES
          </a>
          <a
            href="#why-us"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            WHY US
          </a>
          <a
            href="#industries"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            INDUSTRIES
          </a>
          <button
            type="button"
            className={styles.mobileLink}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTrack?.();
            }}
            style={{ textAlign: "left", width: "100%" }}
          >
            TRACK SHIPMENT
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote?.();
            }}
            className="btn btn-primary"
            style={{ marginTop: "8px", width: "100%" }}
          >
            <span className="btn-icon-square" />
            GET A QUOTE
          </button>
        </div>
      )}
    </header>
  );
}
