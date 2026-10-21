import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://foodbox.delivery";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FOODBOX | High-Speed Urban Dispatch & Air Freight Logistics",
    template: "%s | FOODBOX Logistics",
  },
  description:
    "Flexible logistics solutions built around your business. Rapid urban two-wheeler dispatch, commercial road freight (FTL/LTL), and international air cargo with 98% on-time reliability.",
  keywords: [
    "foodbox",
    "foodbox logistics",
    "urban dispatch",
    "bike courier",
    "moto delivery",
    "commercial freight",
    "road freight logistics",
    "air freight cargo",
    "ocean freight shipping",
    "cold chain logistics",
    "Warri Delta State freight",
    "NPA port shipping Warri",
    "express cargo Nigeria",
    "supply chain management",
    "logistics telematics",
  ],
  authors: [{ name: "FOODBOX Logistics Network", url: siteUrl }],
  creator: "FOODBOX Logistics",
  publisher: "FOODBOX Global Dispatch",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FOODBOX | High-Speed Urban Dispatch & Air Freight Logistics",
    description:
      "Flexible logistics solutions built around your business. Rapid urban dispatch, commercial road freight, and cross-border international air cargo with 98% on-time delivery.",
    url: siteUrl,
    siteName: "FOODBOX Logistics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOODBOX | Flexible Logistics Solutions Built Around Your Business",
    description:
      "Rapid urban dispatch, commercial road freight, and international air cargo engineered with industrial precision and 24/7 live telemetry.",
    creator: "@foodboxlogistics",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0D14",
  width: "device-width",
  initialScale: 1,
};

// ─── AEO (Answer Engine Optimization) & Search Engine Knowledge Graph ───────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LogisticsService",
      "@id": `${siteUrl}/#organization`,
      name: "FOODBOX Logistics",
      legalName: "FOODBOX Freight & Urban Dispatch Limited",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      description:
        "Industrial-precision logistics and rapid dispatch provider specializing in two-wheeler urban delivery, nationwide road freight, and international air cargo.",
      telephone: "+234800FOODBOX",
      email: "dispatch@foodbox.delivery",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warri",
        addressRegion: "Delta State",
        addressCountry: "NG",
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Warri, Delta State",
        },
        {
          "@type": "Country",
          name: "Nigeria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Global Shipping Routes",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "FOODBOX Logistics Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "High-Speed Urban Dispatch",
              description: "Hyperlocal two-wheeler motorcycle rapid courier dispatch under 45-minute turnaround.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Road Freight (FTL & LTL)",
              description: "Dedicated regional and nationwide freight transportation with live GPS route telemetry.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Expedited Air Cargo",
              description: "Cross-border 24-48 hour expedited air freight connecting major international trade hubs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ocean & Intermodal Container Shipping",
              description: "Full-container (FCL) and less-than-container (LCL) freight connecting global seaports including Warri NPA Port.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Temperature-Controlled Cold Chain",
              description: "Climate-monitored refrigerated transit for perishable food, pharmaceuticals, and temperature-sensitive inventory.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What delivery and freight services does FOODBOX provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FOODBOX provides comprehensive logistics solutions including high-speed urban two-wheeler dispatch, full-truckload (FTL) and less-than-truckload (LTL) road freight, expedited 24-48hr international air cargo, ocean container shipping, and temperature-controlled cold chain logistics.",
          },
        },
        {
          "@type": "Question",
          name: "Where does FOODBOX operate in Nigeria and Delta State?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FOODBOX operates key regional logistics corridors across Delta State connecting NPA Commercial Port Warri, Effurun Roundabout, Sapele Road, DSC Expressway, and Refinery Road Ekpan, as well as nationwide interstate and global cross-border routes.",
          },
        },
        {
          "@type": "Question",
          name: "How fast is FOODBOX urban dispatch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FOODBOX urban motorcycle couriers maintain an average delivery turnaround time of under 45 minutes with active GPS telemetry tracking and 98% on-time completion rates.",
          },
        },
        {
          "@type": "Question",
          name: "How can I track my shipment with FOODBOX?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can track your package 24/7 on the dedicated FOODBOX Shipment Tracking portal at foodbox.delivery/track using your unique shipping reference code.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get an enterprise logistics quote?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quotes can be requested directly through the FOODBOX online quoting portal on the website or by contacting the 24/7 Delta Dispatch coordination desk.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
