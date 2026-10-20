import React from "react";

interface HUDCardProps {
  metric: string;
  unit?: string;
  label: string;
  sublabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HUDCard({
  metric,
  unit,
  label,
  sublabel,
  className = "",
  style,
}: HUDCardProps) {
  return (
    <div className={`hud-card ${className}`} style={style}>
      {/* Precision corner nodes (Section 4.2 of design system) */}
      <span className="hud-node-bl" />
      <span className="hud-node-br" />

      <div className="hud-metric-num">
        {metric}
        {unit && <span className="hud-metric-unit">{unit}</span>}
      </div>

      <div className="hud-divider" />

      <div className="hud-label">{label}</div>
      {sublabel && (
        <div style={{ fontSize: "10px", color: "#94A3B8", marginTop: "4px" }}>
          {sublabel}
        </div>
      )}
    </div>
  );
}
