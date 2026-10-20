"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenQuote?: () => void;
  onOpenTrack?: () => void;
}

/* ─── Bottom Tab Nav Items ─── */
const MOBILE_TABS = [
  {
    href: "/",
    label: "Home",
    exact: true,
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        stroke={active ? "#D9A926" : "currentColor"}>
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" fill={active ? "rgba(217,169,38,0.15)" : "none"} />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    exact: false,
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        stroke={active ? "#D9A926" : "currentColor"}>
        <circle cx="12" cy="8" r="4" fill={active ? "rgba(217,169,38,0.15)" : "none"} />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    href: "/services",
    label: "Services",
    exact: false,
    center: true,
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        stroke={active ? "#0A0D14" : "#FFFFFF"}>
        <rect x="1" y="3" width="15" height="13" rx="2" fill={active ? "rgba(10,13,20,0.2)" : "none"} />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    href: "/blog",
    label: "Blog",
    exact: false,
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        stroke={active ? "#D9A926" : "currentColor"}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill={active ? "rgba(217,169,38,0.15)" : "none"} />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    href: "/track",
    label: "Track",
    exact: false,
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        stroke={active ? "#D9A926" : "currentColor"}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill={active ? "rgba(217,169,38,0.15)" : "none"} />
        <circle cx="12" cy="10" r="3" fill={active ? "rgba(217,169,38,0.4)" : "none"} stroke={active ? "#D9A926" : "currentColor"} />
      </svg>
    ),
  },
];

export default function Navbar({ onOpenQuote, onOpenTrack }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <>
      {/* ══ Top Header ══ */}
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo} aria-label="FOODBOX Home">
          <div className={styles.logoIcon}>
            <svg width="28" height="22" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L28 2L22 12L4 12Z" fill="#F26A21" />
              <path d="M8 14L26 14L20 24L2 24Z" fill="#94A3B8" />
            </svg>
          </div>
          <span className={styles.brandText}>
            FOOD<span className={styles.brandAccent}>BOX</span>
          </span>
        </Link>

        {/* Desktop Center Nav Capsule */}
        <nav className={styles.navContainer} aria-label="Main Navigation">
          <Link href="/about" className={`${styles.navLink} ${isActive("/about", false) ? styles.navLinkActive : ""}`}>
            ABOUT US
          </Link>
          <Link href="/services" className={`${styles.navLink} ${isActive("/services", false) ? styles.navLinkActive : ""}`}>
            OUR SERVICES
          </Link>
          <a href="/#why-us" className={styles.navLink}>
            WHY US
          </a>
          <Link href="/blog" className={`${styles.navLink} ${isActive("/blog", false) ? styles.navLinkActive : ""}`}>
            BLOG
          </Link>
          <Link href="/track" className={`${styles.navLink} ${isActive("/track", false) ? styles.navLinkActive : ""}`}>
            TRACK SHIPMENT
          </Link>
        </nav>

        {/* Right CTA — desktop: full button; mobile: compact icon button */}
        <div className={styles.headerRight}>
          <button
            type="button"
            onClick={onOpenQuote}
            className="btn btn-primary"
            aria-label="Get a quote"
          >
            <span className="btn-icon-square" />
            <span className={styles.btnLabel}>GET A QUOTE</span>
          </button>
        </div>
      </header>

      {/* ══ Mobile Bottom Tab Bar ══ */}
      <nav className={styles.bottomTabBar} aria-label="Mobile Navigation">
        {MOBILE_TABS.map((tab) => {
          const active = isActive(tab.href, tab.exact ?? false);
          return tab.center ? (
            /* Center Services pill — elevated accent */
            <Link
              key={tab.href}
              href={tab.href}
              className={styles.tabItemCenter}
              aria-label={tab.label}
              aria-current={active ? "page" : undefined}
            >
              <span className={`${styles.tabCenterBubble} ${active ? styles.tabCenterBubbleActive : ""}`}>
                {tab.icon(active)}
              </span>
              <span className={`${styles.tabLabel} ${active ? styles.tabLabelActive : ""}`}>
                {tab.label}
              </span>
            </Link>
          ) : (
            <Link
              key={tab.href}
              href={tab.href}
              className={styles.tabItem}
              aria-label={tab.label}
              aria-current={active ? "page" : undefined}
            >
              <span className={`${styles.tabIcon} ${active ? styles.tabIconActive : ""}`}>
                {tab.icon(active)}
              </span>
              <span className={`${styles.tabLabel} ${active ? styles.tabLabelActive : ""}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
