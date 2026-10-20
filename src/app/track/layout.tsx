import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipment Tracking | FOODBOX Live Logistics Telemetry",
  description:
    "Track your active consignments, urban dispatch couriers, and freight shipments across Warri, Delta State and global corridors with real-time GPS telemetry.",
  openGraph: {
    title: "Shipment Tracking | FOODBOX Logistics",
    description:
      "Real-time dispatch tracking and delivery telemetry for Warri, Delta State and nationwide routes.",
    url: "https://foodbox.delivery/track",
  },
  alternates: {
    canonical: "/track",
  },
};

export default function TrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
