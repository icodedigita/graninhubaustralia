import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// package.json's "build" script runs `opennextjs-cloudflare build` (since
// that's the command Cloudflare Workers Builds always invokes), which would
// otherwise shell out to `npm run build` internally and recurse forever.
// Point it at the underlying `next build` directly instead.
export default {
  ...defineCloudflareConfig(),
  buildCommand: "npx next build",
};
