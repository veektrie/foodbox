import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FOODBOX | High-Speed Urban Dispatch & Air Freight Logistics",
  description:
    "High-speed urban two-wheeler rapid dispatch and border-to-border international air cargo logistics built with industrial precision.",
  keywords: [
    "foodbox",
    "urban dispatch",
    "bike courier",
    "moto courier",
    "air freight",
    "international air cargo",
    "logistics telematics",
  ],
  authors: [{ name: "FOODBOX Logistics" }],
  openGraph: {
    title: "FOODBOX | Rapid Urban Dispatch & Global Air Freight",
    description:
      "Hyperlocal two-wheeler courier network and cross-border commercial air logistics.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
