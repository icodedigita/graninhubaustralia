/**
 * Single source of truth for contact numbers, social links and site metadata.
 * All values are driven by env vars so they can change per-deployment without touching code.
 */

function digitsOnly(value: string) {
  return value.replace(/[^\d]/g, "");
}

const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+61 461 52 7765";
const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? digitsOnly(phoneDisplay);

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "Grain Hub Australia";

export const siteConfig = {
  name: siteName,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://grainhubaustralia.com.au",

  seo: {
    title:
      process.env.NEXT_PUBLIC_SEO_TITLE ??
      `${siteName} | Premium Australian Pulses, Lentils & Grains`,
    description:
      process.env.NEXT_PUBLIC_SEO_DESCRIPTION ??
      `${siteName} — your trusted partner for high-quality, non-GMO pulses, lentils and grains. Farm-direct exports to the world since 2016.`,
    ogTitle: process.env.NEXT_PUBLIC_SEO_OG_TITLE ?? siteName,
    ogDescription:
      process.env.NEXT_PUBLIC_SEO_OG_DESCRIPTION ??
      "Premium Australian pulses, lentils & grains for global palates.",
    ogImage: process.env.NEXT_PUBLIC_SEO_OG_IMAGE ?? "/images/lentils.webp",
    twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "",
    keywords: (
      process.env.NEXT_PUBLIC_SEO_KEYWORDS ??
      "Australian pulses,lentils export,chickpeas,mung beans,yellow split peas,grain hub australia,grain export Australia"
    )
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    // Defaults to blocking all crawlers so unfinished/staging deployments never
    // get indexed. Set NEXT_PUBLIC_ALLOW_INDEXING=true once ready to go live.
    allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  },

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@grainhubaustralia.com.au",
    phoneDisplay,
    whatsappNumber,
    address: process.env.NEXT_PUBLIC_ADDRESS ?? "Melbourne, Victoria, Australia",
    businessHours: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? "Mon – Fri, 9am – 6pm AEST",
  },

  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "",
  },
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function socialLinksList() {
  return Object.entries(siteConfig.social).filter(([, url]) => url.length > 0);
}
