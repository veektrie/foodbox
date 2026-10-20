import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics & Freight Journal | FOODBOX Dispatch Intelligence",
  description:
    "Explore cutting-edge insights on African trade corridors, port operations in Warri and Lagos, urban dispatch telemetry, cold chain logistics, and supply chain technology.",
  keywords: [
    "Logistics blog Nigeria",
    "Freight journal Africa",
    "Warri port clearance",
    "Cold chain telemetry",
    "Urban last-mile dispatch",
    "Supply chain intelligence",
    "Commercial haulage technology",
  ],
  alternates: {
    canonical: "https://foodboxlogistics.com/blog",
  },
  openGraph: {
    title: "Logistics & Freight Journal | FOODBOX Dispatch Intelligence",
    description:
      "Expert analysis, field reports, and technical insights from the African supply chain frontier.",
    url: "https://foodboxlogistics.com/blog",
    siteName: "FOODBOX Logistics",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistics & Freight Journal | FOODBOX Dispatch Intelligence",
    description:
      "Field reports, cold-chain telemetry, and port corridor intelligence from FOODBOX.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
