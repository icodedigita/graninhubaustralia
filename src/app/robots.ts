import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Crawling is always allowed; the site has no staging-only indexing gate.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
