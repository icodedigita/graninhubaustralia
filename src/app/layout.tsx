import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig, socialLinksList } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const title = "Grain Hub Australia | Premium Australian Pulses, Lentils & Grains";
const description =
  "Grain Hub Australia — your trusted partner for high-quality, non-GMO pulses, lentils and grains. Farm-direct exports to the world since 2016.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Grain Hub Australia",
  },
  description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Australian pulses",
    "lentils export",
    "chickpeas",
    "mung beans",
    "yellow split peas",
    "grain hub australia",
    "grain export Australia",
  ],
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title,
    description: "Premium Australian pulses, lentils & grains for global palates.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_AU",
    images: [
      {
        url: "/images/lentils.webp",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Premium Australian pulses, lentils & grains for global palates.",
    images: ["/images/lentils.webp"],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.address,
    addressCountry: "AU",
  },
  sameAs: socialLinksList().map(([, url]) => url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#fbfaf6] text-stone-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
