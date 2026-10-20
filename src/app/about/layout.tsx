import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | FOODBOX Dispatch & Logistics",
  description:
    "Learn how FOODBOX is redefining freight logistics in West Africa with a 98% on-time delivery rate, 120+ global clients, and a dedicated fleet of multi-modal carriers spanning road, sea, and air corridors.",
  keywords: [
    "About FOODBOX",
    "Logistics company Nigeria",
    "Freight company Warri",
    "Supply chain Africa",
    "Reliable haulage company",
    "West Africa logistics partner",
  ],
  alternates: { canonical: "https://foodboxlogistics.com/about" },
  openGraph: {
    title: "About Us | FOODBOX Dispatch & Logistics",
    description:
      "Reliable freight logistics in West Africa — built around your supply chain.",
    url: "https://foodboxlogistics.com/about",
    siteName: "FOODBOX Logistics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About FOODBOX Logistics",
    description:
      "Redefining West African freight with 98% on-time delivery and 120+ global clients.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
