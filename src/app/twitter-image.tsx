import { ImageResponse } from "next/og";

export const alt = "FOODBOX | Smart Multi-Modal Freight & High-Speed Urban Dispatch";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 64px",
          backgroundColor: "#07090E",
          backgroundImage:
            "radial-gradient(circle at 75% 45%, rgba(242, 106, 33, 0.22) 0%, transparent 45%), radial-gradient(circle at 20% 20%, rgba(217, 169, 38, 0.15) 0%, transparent 40%), radial-gradient(circle at 50% 90%, rgba(15, 23, 42, 0.7) 0%, transparent 70%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Decorative Background Grid Matrix */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* ── TOP BAR: BRAND IDENTITY & TELEMETRY BEACON ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Top Left Mini Identity */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                backgroundColor: "#131722",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <path d="M10 2L28 2L22 12L4 12Z" fill="#F26A21" />
                <path d="M8 14L26 14L20 24L2 24Z" fill="#94A3B8" />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "24px",
                  fontWeight: 900,
                  letterSpacing: "0.14em",
                  color: "#FFFFFF",
                }}
              >
                <span>FOOD</span>
                <span style={{ color: "#F26A21" }}>BOX</span>
              </div>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#D9A926",
                  marginTop: "3px",
                }}
              >
                LOGISTICS NETWORK
              </span>
            </div>
          </div>

          {/* Live Status Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 22px",
              backgroundColor: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              borderRadius: "9999px",
            }}
          >
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
                boxShadow: "0 0 10px #10B981",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6EE7B7",
              }}
            >
              24/7 Live Telemetry
            </span>
          </div>
        </div>

        {/* ── CENTER BODY: SPLIT PROPOSITION (LEFT) + HERO LOGO EMBLEM BADGE (RIGHT) ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: "40px",
            margin: "auto 0",
          }}
        >
          {/* Left Column: Headline & Value Narrative */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "680px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  backgroundColor: "#D9A926",
                  display: "flex",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#D9A926",
                }}
              >
                Commercial Freight &amp; Urban Dispatch
              </span>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "48px",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "#FFFFFF",
              }}
            >
              Reliable Logistics built around your business.
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "17px",
                fontWeight: 600,
                color: "#94A3B8",
              }}
            >
              <span style={{ color: "#F26A21" }}>Road Freight</span>
              <span style={{ color: "#475569" }}>•</span>
              <span style={{ color: "#D9A926" }}>Sea Cargo</span>
              <span style={{ color: "#475569" }}>•</span>
              <span style={{ color: "#38BDF8" }}>Air Express</span>
              <span style={{ color: "#475569" }}>•</span>
              <span style={{ color: "#10B981" }}>Moto Courier</span>
            </div>
          </div>

          {/* Right Column: COMMANDING HERO FOODBOX LOGO SHOWPIECE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "320px",
              height: "260px",
              borderRadius: "28px",
              backgroundColor: "rgba(18, 24, 38, 0.75)",
              border: "2px solid rgba(242, 106, 33, 0.45)",
              boxShadow:
                "0 24px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(242, 106, 33, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              padding: "24px",
              position: "relative",
            }}
          >
            {/* Top Right Accent Marker */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                right: "16px",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "rgba(255, 255, 255, 0.4)",
                display: "flex",
              }}
            >
              [FOODBOX-HQ]
            </div>

            {/* Giant Centered Logo SVG */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                filter: "drop-shadow(0 12px 24px rgba(242, 106, 33, 0.4))",
                marginBottom: "12px",
              }}
            >
              <svg width="130" height="96" viewBox="0 0 32 26" fill="none">
                <path d="M10 2L28 2L22 12L4 12Z" fill="#F26A21" />
                <path d="M8 14L26 14L20 24L2 24Z" fill="#CBD5E1" />
              </svg>
            </div>

            {/* Prominent Logotype under Emblem */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "32px",
                fontWeight: 900,
                letterSpacing: "0.16em",
                lineHeight: 1,
                color: "#FFFFFF",
              }}
            >
              <span>FOOD</span>
              <span style={{ color: "#F26A21" }}>BOX</span>
            </div>

            {/* Sub-label under logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#94A3B8",
                marginTop: "6px",
              }}
            >
              <span>WARRI</span>
              <span style={{ color: "#D9A926" }}>•</span>
              <span>NATIONWIDE DISPATCH</span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR: 4 PERFORMANCE STATS & DOMAIN ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "20px",
          }}
        >
          {/* 4 Stats */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "26px", fontWeight: 900, color: "#D9A926", lineHeight: 1 }}>
                98%
              </span>
              <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", color: "#64748B", letterSpacing: "0.1em" }}>
                On-Time Rate
              </span>
            </div>

            <div style={{ width: "1px", height: "30px", backgroundColor: "rgba(255, 255, 255, 0.12)", display: "flex" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "26px", fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>
                250+
              </span>
              <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", color: "#64748B", letterSpacing: "0.1em" }}>
                Nationwide Routes
              </span>
            </div>

            <div style={{ width: "1px", height: "30px", backgroundColor: "rgba(255, 255, 255, 0.12)", display: "flex" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "26px", fontWeight: 900, color: "#10B981", lineHeight: 1 }}>
                24/7
              </span>
              <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", color: "#64748B", letterSpacing: "0.1em" }}>
                Live GPS Tracking
              </span>
            </div>

            <div style={{ width: "1px", height: "30px", backgroundColor: "rgba(255, 255, 255, 0.12)", display: "flex" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "26px", fontWeight: 900, color: "#F26A21", lineHeight: 1 }}>
                &lt;45m
              </span>
              <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", color: "#64748B", letterSpacing: "0.1em" }}>
                Urban Dispatch
              </span>
            </div>
          </div>

          {/* Web Address Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: "#FFFFFF",
              backgroundColor: "#111724",
              padding: "10px 24px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.16)",
            }}
          >
            <span style={{ color: "#D9A926" }}>foodbox.delivery</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
