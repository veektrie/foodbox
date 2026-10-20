import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | FOODBOX Dispatch & Logistics",
  description:
    "Explore FOODBOX's full range of logistics services — road freight, sea cargo, air freight, cold chain, urban last-mile dispatch, and port clearing across West Africa.",
  keywords: [
    "Logistics services Nigeria",
    "Road freight Nigeria",
    "Sea freight West Africa",
    "Air cargo Delta State",
    "Cold chain logistics",
    "Last-mile urban delivery",
    "Port clearing Nigeria",
  ],
  alternates: { canonical: "https://foodboxlogistics.com/services" },
  openGraph: {
    title: "Our Services | FOODBOX Dispatch & Logistics",
    description:
      "Road, sea, air, cold chain, and urban last-mile logistics — powered by FOODBOX.",
    url: "https://foodboxlogistics.com/services",
    siteName: "FOODBOX Logistics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOODBOX Logistics Services",
    description:
      "Multi-modal freight across West Africa. Road, sea, air, and urban dispatch.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
