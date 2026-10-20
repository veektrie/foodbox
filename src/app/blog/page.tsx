"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import styles from "./blog.module.css";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: "Urban Dispatch" | "Commercial Freight" | "Maritime & Port" | "Cold Chain & Agri" | "Fleet Tech";
  excerpt: string;
  fullContent: {
    intro: string;
    callout: string;
    subheading: string;
    bullets: string[];
    conclusion: string;
  };
  author: {
    name: string;
    role: string;
    initials: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "featured-1",
    title: "Streamlining Niger Delta Port Logistics: Overcoming Berth Congestion in Warri & Onne Corridors",
    slug: "streamlining-niger-delta-port-logistics",
    category: "Maritime & Port",
    featured: true,
    excerpt:
      "A technical analysis of how dedicated inland container depots, pre-gate clearance protocols, and multi-modal river shuttles are reducing vessel dwell time by 42% across Delta state commercial terminals.",
    fullContent: {
      intro:
        "Commercial haulage through southern maritime gates has historically faced protracted turnaround cycles, with vessels awaiting berth access for up to 14 days. At FOODBOX, our direct operational integration with the Nigerian Ports Authority (NPA) Delta Ports complex has pioneered a synchronized barge-and-depot bypass framework.",
      callout:
        "\"Port efficiency is not merely an ocean metric; it is dictated by the speed at which heavy cargo transitions from quay crane to bonded corridor without demurrage accumulation.\"",
      subheading: "Key Operational Innovations Implemented in 2026:",
      bullets: [
        "Pre-arrival digital cargo manifests synchronised 48 hours prior to vessel drop-anchor.",
        "Direct off-dock transfer to the Warri Industrial Bypass logistics staging terminal.",
        "Automated weigh-in-motion transponders eliminating gate bottleneck queues.",
        "Round-the-clock armed convoy escorts along critical inter-state haulage corridors.",
      ],
      conclusion:
        "By replacing uncoordinated road queues with scheduled multi-axle freight departures, FoodBox clients now experience guaranteed gate-to-warehouse clearance within 28 hours of container touchdown.",
    },
    author: {
      name: "Capt. Tariye Adeyemi",
      role: "VP of Maritime & Port Logistics",
      initials: "TA",
    },
    date: "October 18, 2026",
    readTime: "6 min read",
    image: "/port-terminal-sunset.jpg",
  },
  {
    id: "post-1",
    title: "Cold Chain Integrity: Multi-Zone Telemetry Preserving Perishable Cargo Across 800km Corridors",
    slug: "cold-chain-telemetry-perishable-cargo",
    category: "Cold Chain & Agri",
    excerpt:
      "How continuous IoT thermal logging and dual-compressor reefer trailers guarantee strict +2°C to +4°C temperature integrity from northern farms to Delta distribution centers.",
    fullContent: {
      intro:
        "Transporting fresh agricultural goods and biological pharmaceuticals across tropical highway corridors exposes freight to extreme heat cycles. A 30-minute thermal excursion can render an entire 24-ton consignment inadmissible.",
      callout:
        "\"Real-time sensor telemetry turns cold chain logistics from an insurance gamble into a deterministic science.\"",
      subheading: "Critical System Protocols:",
      bullets: [
        "Calibrated wireless sensor arrays stationed at 4 interior container zones.",
        "Immediate satellite SMS dispatch alerts if ambient thresholds drift by more than 0.8°C.",
        "Automatic secondary cooling system activation in case of primary generator fluctuation.",
        "Cryptographically signed thermal export logs attached to each bill of lading.",
      ],
      conclusion:
        "With a verified 99.8% thermal compliance rate over 1,400 completed inter-state journeys, FoodBox continues to set the benchmark for temperature-sensitive cargo security in West Africa.",
    },
    author: {
      name: "Dr. Ngozi Eze",
      role: "Head of Cold Chain Engineering",
      initials: "NE",
    },
    date: "October 15, 2026",
    readTime: "5 min read",
    image: "/cold-chain-facility.jpg",
  },
  {
    id: "post-2",
    title: "Urban Last-Mile Dispatch: Why Two-Wheeled Fleets Beat Gridlock in Commercial Hubs",
    slug: "urban-last-mile-two-wheeled-fleets",
    category: "Urban Dispatch",
    excerpt:
      "Deconstructing our 45-minute urban delivery SLA. How dynamic GPS geofencing and reinforced cargo moto couriers navigate peak metropolitan traffic.",
    fullContent: {
      intro:
        "High-density urban business districts in Lagos, Port Harcourt, and Warri experience some of the world's tightest traffic bottlenecks. When urgent corporate legal tenders, lab samples, or retail items require same-day handoff, four-wheeled vans quickly stall.",
      callout:
        "\"Last-mile agility requires micro-fleet routing engines that calculate lane permeability in real time rather than static GPS distance.\"",
      subheading: "Tactical Execution Pillars:",
      bullets: [
        "Reinforced, weatherproof composite cargo boxes with tamper-evident digital seals.",
        "Hyper-local staging micro-hubs placed within 5km radius of commercial districts.",
        "Real-time turn-by-turn path re-routing responding to sudden road blockages.",
        "Direct recipient push verification with SMS one-time authorization tokens.",
      ],
      conclusion:
        "FoodBox's urban motorcycle division consistently beats standard delivery estimates by an average of 38 minutes per route, maintaining an unprecedented 98.4% on-time achievement rate.",
    },
    author: {
      name: "Femi Balogun",
      role: "Director of Urban Dispatch Operations",
      initials: "FB",
    },
    date: "October 12, 2026",
    readTime: "4 min read",
    image: "/urban-courier.jpg",
  },
  {
    id: "post-3",
    title: "Heavy Haulage Telematics: Slashing Turnaround Times by 34% with Smart Fleet Sensors",
    slug: "heavy-haulage-telematics-smart-fleet",
    category: "Fleet Tech",
    excerpt:
      "A deep dive into our vehicle diagnostics architecture. Monitoring tire pressure, brake heat, and fuel telemetry to prevent highway breakdowns before they occur.",
    fullContent: {
      intro:
        "Unscheduled highway breakdowns represent the single largest driver of supply chain delay and asset depreciation in interstate logistics. By deploying predictive telematics across our heavy tractor-trailer fleet, FoodBox eliminates mechanical guesswork.",
      callout:
        "\"Preventative telemetry replaces roadside firefighting with planned maintenance stops during scheduled cargo driver swaps.\"",
      subheading: "Sensor Telematics Integrated on Every Tractor:",
      bullets: [
        "Continuous TPMS pressure monitoring detecting micro-punctures 120km in advance.",
        "Brake drum thermal detectors preventing brake-fade incidents on steep descents.",
        "High-precision CAN-bus fuel flow meters thwarting unauthorized siphon attempts.",
        "Driver fatigue optical monitoring detecting micro-sleep patterns and lane deviation.",
      ],
      conclusion:
        "These automated telemetry streams are routed live to our 24/7 central dispatch console, ensuring every client consignment arrives without mechanical interruption.",
    },
    author: {
      name: "Engr. David Okoro",
      role: "Chief Telematics Architect",
      initials: "DO",
    },
    date: "October 08, 2026",
    readTime: "7 min read",
    image: "/hero-truck.jpg",
  },
  {
    id: "post-4",
    title: "Air Freight vs. Sea Cargo: A Strategic Cost-Velocity Decision Matrix for Energy Spares",
    slug: "air-freight-vs-sea-cargo-decision-matrix",
    category: "Commercial Freight",
    excerpt:
      "When offshore drilling rigs or manufacturing plants face line stoppages, choosing the right logistics modality can mean the difference between millions in downtime and seamless continuity.",
    fullContent: {
      intro:
        "In the oil & gas and industrial manufacturing sectors, logistics costs must be measured against operational downtime cost. A valve that costs $2,000 to air freight may save $150,000 in drilling rig suspension charges.",
      callout:
        "\"True freight optimization evaluates the velocity-to-downtime ratio rather than freight tariff alone.\"",
      subheading: "Selection Criteria Matrix:",
      bullets: [
        "Air Expedited: Sub-24 hour transit for mission-critical parts under 5,000kg.",
        "Charter Heavy Lift: Oversized turbine rotors and high-pressure blow-out preventers.",
        "Ocean LCL / FCL: Bulk maintenance consumables, drilling muds, and steel tubing.",
        "Multi-Modal Fly-and-Truck: Air landing at Port Harcourt followed by secured escort.",
      ],
      conclusion:
        "FoodBox logistics advisors work directly with corporate procurement desks to model total landed cost scenarios and deploy expedited corridors on demand.",
    },
    author: {
      name: "Marcus Sterling",
      role: "Global Freight Forwarding Strategist",
      initials: "MS",
    },
    date: "October 03, 2026",
    readTime: "5 min read",
    image: "/air-cargo.jpg",
  },
  {
    id: "post-5",
    title: "Commercial Depot Efficiency: The Architecture of a High-Velocity Logistics Hub",
    slug: "commercial-depot-efficiency-architecture",
    category: "Commercial Freight",
    excerpt:
      "Inside our central freight consolidation terminal. Cross-docking layouts, automated forklift sorting, and high-density pallet racking designed for swift intermodal turnover.",
    fullContent: {
      intro:
        "A warehouse that holds cargo for weeks is a storage facility; a modern logistics hub is a rapid-velocity sorting engine. Our flagship cross-dock terminal was engineered to minimize cargo dwell time to less than 6 hours.",
      callout:
        "\"The best logistics hub is the one where freight never sits still—it transfers seamlessly from long-haul trunk to regional distribution.\"",
      subheading: "Depot Architecture Highlights:",
      bullets: [
        "Synchronized dual-sided dock bays enabling simultaneous unload and outbound dispatch.",
        "Heavy-duty laser barcode verification scanning pallets directly off trailer beds.",
        "Dedicated segregated staging for high-value bonded goods with biometric vaults.",
        "Zero-emission electric forklift fleet operating 24 hours on solar microgrid storage.",
      ],
      conclusion:
        "Clients utilizing our consolidation hubs reduce overall distribution cycle times by 31% while enjoying unified real-time inventory visibility via our tracking portal.",
    },
    author: {
      name: "Amina Al-Mansoor",
      role: "Director of Warehousing & Terminal Ops",
      initials: "AA",
    },
    date: "September 28, 2026",
    readTime: "6 min read",
    image: "/road-freight-depot.jpg",
  },
  {
    id: "post-6",
    title: "Securing Cross-Border Trade: Navigating ECOWAS Customs & Transit Protocols",
    slug: "securing-cross-border-trade-ecowas",
    category: "Maritime & Port",
    excerpt:
      "Overcoming border documentation delays, harmonization hurdles, and vehicle transit carnets when distributing manufactured products across West African trade routes.",
    fullContent: {
      intro:
        "While the African Continental Free Trade Area (AfCFTA) promises integrated continental commerce, regional border crossings still present bureaucratic complexities that catch unprepared shippers off guard.",
      callout:
        "\"Regulatory foresight is as critical to transport schedules as tire health and diesel reserves.\"",
      subheading: "Crucial Cross-Border Checkpoints:",
      bullets: [
        "Advanced single-window customs declarations uploaded prior to border approach.",
        "Harmonized certificate of origin verification conforming to AfCFTA rules.",
        "Pre-approved cross-border transport carnets avoiding bonded bond delays.",
        "Satellite GPS route compliance ensuring tax rebate eligibility upon transit exit.",
      ],
      conclusion:
        "FoodBox’s compliance specialists manage every declaration directly with regional authorities, guaranteeing border clearance in hours rather than days.",
    },
    author: {
      name: "Tunde Oladipo",
      role: "Cross-Border Regulatory Counsel",
      initials: "TO",
    },
    date: "September 22, 2026",
    readTime: "5 min read",
    image: "/sea-freight.jpg",
  },
];

const CATEGORIES = [
  "All",
  "Maritime & Port",
  "Cold Chain & Agri",
  "Urban Dispatch",
  "Fleet Tech",
  "Commercial Freight",
] as const;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article is the first featured or the first item
  const featuredArticle = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  // Remaining articles for grid
  const gridArticles = useMemo(() => {
    return filteredPosts.filter((p) => p.id !== featuredArticle.id);
  }, [filteredPosts, featuredArticle]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail("");
      }, 5000);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Pinned / Fixed Header across site */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* ─── Hero / Editorial Banner ─── */}
          <section className={styles.blogHero}>
            <div className={styles.kicker}>
              <span className={styles.kickerDot} />
              FOODBOX DISPATCH JOURNAL & LOGISTICS INTELLIGENCE
            </div>
            <h1 className={styles.heroTitle}>
              Insights from the <br className="hidden md:inline" />
              <span className={styles.heroTitleHighlight}>Supply Chain Frontier</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Field reports, cold-chain telemetry, Niger Delta port clearances,
              and multi-modal transit strategies written by logistics practitioners.
            </p>

            {/* ─── Controls: Category Filter & Search Bar ─── */}
            <div className={styles.controlsRow}>
              {/* Category Pills */}
              <div className={styles.categoryPills}>
                {CATEGORIES.map((cat) => {
                  const count =
                    cat === "All"
                      ? BLOG_POSTS.length
                      : BLOG_POSTS.filter((p) => p.category === cat).length;
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`${styles.categoryPill} ${
                        isActive ? styles.categoryPillActive : ""
                      }`}
                    >
                      {cat}
                      <span className={styles.pillBadge}>{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className={styles.searchBox}>
                <svg
                  className={styles.searchIcon}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles, topics, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                  aria-label="Search articles"
                />
              </div>
            </div>
          </section>

          {/* ─── Featured Hero Article (shown when All is selected or category matches) ─── */}
          {selectedCategory === "All" && searchQuery === "" && (
            <article
              className={styles.featuredCard}
              onClick={() => setActiveArticle(featuredArticle)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveArticle(featuredArticle);
                }
              }}
            >
              <div className={styles.featuredImageWrapper}>
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className={styles.featuredImage}
                  sizes="(max-width: 992px) 100vw, 55vw"
                  priority
                />
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.featuredMetaTop}>
                  <span className={styles.featuredBadge}>FEATURED INSIGHT</span>
                  <span className={styles.categoryTag}>
                    {featuredArticle.category}
                  </span>
                  <span className={styles.readTime}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className={styles.featuredHeading}>
                  {featuredArticle.title}
                </h2>

                <p className={styles.featuredExcerpt}>
                  {featuredArticle.excerpt}
                </p>

                <div className={styles.authorRow}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>
                      {featuredArticle.author.initials}
                    </div>
                    <div className={styles.authorDetails}>
                      <span className={styles.authorName}>
                        {featuredArticle.author.name}
                      </span>
                      <span className={styles.authorRole}>
                        {featuredArticle.author.role} • {featuredArticle.date}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={styles.readButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveArticle(featuredArticle);
                    }}
                  >
                    READ ARTICLE
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* ─── Articles Grid ─── */}
          {gridArticles.length > 0 ? (
            <div className={styles.articlesGrid}>
              {gridArticles.map((post) => (
                <article
                  key={post.id}
                  className={styles.articleCard}
                  onClick={() => setActiveArticle(post)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveArticle(post);
                    }
                  }}
                >
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardTag}>{post.category}</span>
                      <span className={styles.cardReadTime}>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.cardAuthor}>
                        {post.author.name}
                      </span>
                      <span className={styles.cardAction}>
                        READ STORY
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3 className={styles.emptyStateTitle}>No articles found</h3>
              <p className={styles.emptyStateDesc}>
                We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; in
                the selected category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className={styles.readButton}
                style={{ marginTop: "16px" }}
              >
                CLEAR FILTERS
              </button>
            </div>
          )}

          {/* ─── Newsletter Subscription Card ─── */}
          <section className={styles.newsletterCard}>
            <div className={styles.newsletterKicker}>STAY INFORMED</div>
            <h2 className={styles.newsletterTitle}>
              Get Logistics Intelligence in Your Inbox
            </h2>
            <p className={styles.newsletterSubtitle}>
              Join over 4,500 supply chain directors, freight forwarders, and
              trade professionals receiving our bi-weekly African trade corridor briefings.
            </p>

            {newsletterSubscribed ? (
              <div
                style={{
                  background: "rgba(34, 197, 94, 0.15)",
                  border: "1px solid rgba(34, 197, 94, 0.4)",
                  color: "#4ADE80",
                  padding: "14px 24px",
                  borderRadius: "9999px",
                  display: "inline-block",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                ✓ Thank you for subscribing! Check your inbox for our latest briefing.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className={styles.newsletterInput}
                  aria-label="Email address"
                />
                <button type="submit" className={styles.newsletterSubmit}>
                  SUBSCRIBE
                </button>
              </form>
            )}
          </section>
        </div>
      </main>

      {/* ─── Article Reader Modal ─── */}
      {activeArticle && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalDialog}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseButton}
              onClick={() => setActiveArticle(null)}
              aria-label="Close article"
            >
              ✕
            </button>

            <div className={styles.modalHeroImage}>
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={styles.modalBody}>
              <span className={styles.modalCategory}>
                {activeArticle.category}
              </span>
              <h2 className={styles.modalTitle}>{activeArticle.title}</h2>

              <div className={styles.modalMetaRow}>
                <div className={styles.modalMetaItem}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>{activeArticle.author.name}</span>
                </div>
                <div className={styles.modalMetaItem}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{activeArticle.date}</span>
                </div>
                <div className={styles.modalMetaItem}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <p className={styles.modalParagraph}>
                {activeArticle.fullContent.intro}
              </p>

              <blockquote className={styles.modalCallout}>
                {activeArticle.fullContent.callout}
              </blockquote>

              <h4 className={styles.modalSectionHeading}>
                {activeArticle.fullContent.subheading}
              </h4>
              <ul className={styles.modalList}>
                {activeArticle.fullContent.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <p className={styles.modalParagraph}>
                {activeArticle.fullContent.conclusion}
              </p>

              <div className={styles.modalActionFooter}>
                <div className={styles.shareButtons}>
                  <span className={styles.shareLabel}>Share Insight:</span>
                  <button
                    type="button"
                    className={styles.shareBtn}
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Article link copied to clipboard!");
                      }
                    }}
                  >
                    Copy Link
                  </button>
                  <button
                    type="button"
                    className={styles.shareBtn}
                    onClick={() => {
                      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        activeArticle.title + " by @foodbox"
                      )}&url=${encodeURIComponent(window.location.href)}`;
                      window.open(tweetUrl, "_blank");
                    }}
                  >
                    Twitter / X
                  </button>
                  <button
                    type="button"
                    className={styles.shareBtn}
                    onClick={() => {
                      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        window.location.href
                      )}`;
                      window.open(linkedinUrl, "_blank");
                    }}
                  >
                    LinkedIn
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveArticle(null);
                    setIsQuoteOpen(true);
                  }}
                  className={styles.readButton}
                >
                  DISCUSS YOUR FREIGHT REQUIREMENTS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />
    </div>
  );
}
