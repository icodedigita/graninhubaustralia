import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...PRODUCTS.map((p) => ({
      url: `${siteConfig.url}/products/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return routes;
}
