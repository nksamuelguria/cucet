import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    // One page, almost all first-time visitors: there is no second page for a
    // cached stylesheet to pay off on, so shipping the CSS inside the HTML
    // removes the last render-blocking requests. Production builds only.
    inlineCss: true,
  },
};

export default nextConfig;
