import { ImageResponse } from "next/og";

export const alt = "FOODBOX | High-Speed Urban Dispatch & Air Freight Logistics";
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
          padding: "64px 72px",
          backgroundColor: "#0A0D14",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(242, 106, 33, 0.18) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(217, 169, 38, 0.12) 0%, transparent 45%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#FFFFFF",
        }}
      >
        {/* Top Header: Logo + Live Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Brand Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#171B24",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="34" height="26" viewBox="0 0 32 26" fill="none">
                <path d="M10 2L28 2L22 12L4 12Z" fill="#F26A21" />
                <path d="M8 14L26 14L20 24L2 24Z" fill="#94A3B8" />
              </svg>
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#FFFFFF",
              }}
            >
              FOOD<span style={{ color: "#F26A21" }}>BOX</span>
            </div>
          </div>

          {/* Active Network Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 22px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              borderRadius: "9999px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#CBD5E1",
              }}
            >
              Live Telemetry Active
            </span>
          </div>
        </div>

        {/* Center Headline & Value Proposition */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#D9A926",
            }}
          >
            Commercial Freight &amp; High-Speed Urban Logistics
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            Flexible logistics solutions, built around your business.
          </div>
          <div
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: "#94A3B8",
              maxWidth: "840px",
            }}
          >
            Rapid two-wheeler dispatch, full-truckload road transport, and global air freight with 98% on-time performance.
          </div>
        </div>

        {/* Bottom Feature Badges & Metric Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#D9A926" }}>98%</span>
              <span style={{ fontSize: "11px", textTransform: "uppercase", color: "#64748B", letterSpacing: "0.08em" }}>
                On-Time Rate
              </span>
            </div>
            <div style={{ width: "1px", height: "30px", backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF" }}>24/7</span>
              <span style={{ fontSize: "11px", textTransform: "uppercase", color: "#64748B", letterSpacing: "0.08em" }}>
                Live Tracking
              </span>
            </div>
            <div style={{ width: "1px", height: "30px", backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#10B981" }}>&lt;45 Min</span>
              <span style={{ fontSize: "11px", textTransform: "uppercase", color: "#64748B", letterSpacing: "0.08em" }}>
                Urban Dispatch
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#CBD5E1",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "10px 24px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            foodbox.delivery
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
