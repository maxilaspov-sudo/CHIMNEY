import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { SITE } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.name} | Chimney Cleaning, Repair & Inspection`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "California's trusted chimney cleaning, repair, and inspection specialists. CSIA-certified technicians. Serving Los Angeles, San Diego, San Francisco, Sacramento, and all of California.",
  keywords: [
    "chimney cleaning California",
    "chimney sweep",
    "chimney repair",
    "chimney inspection",
    "fireplace cleaning",
    "dryer vent cleaning",
    "chimney cap installation",
    "chimney liner repair",
    "CSIA certified",
  ],
  authors: [{ name: SITE.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
        {
          url: "/og/home.jpg",
          width: 1200,
          height: 630,
          alt: "Chimney Peak California — CSIA-Certified Chimney Cleaning, Repair & Inspection",
        },
      ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LocalBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
        <Analytics />
      </body>
    </html>
  );
}

