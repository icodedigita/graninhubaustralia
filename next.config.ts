import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;

// Enables `getCloudflareContext()` / Workers bindings inside `next dev`.
// No-op in production builds and outside a Cloudflare deploy.
initOpenNextCloudflareForDev();
