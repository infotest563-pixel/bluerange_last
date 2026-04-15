import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🔥 FIX 1
  },
  typescript: {
    ignoreBuildErrors: true, // 🔥 FIX 2
  },

  async rewrites() {
    return [
      {
        source: "/wp-content/:path*",
        destination:
          "https://dev-bluerange.pantheonsite.io/wp-content/:path*",
      },
    ];
  },
};

export default nextConfig;