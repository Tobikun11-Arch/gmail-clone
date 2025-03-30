import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow images from any domain
      },
    ],
    unoptimized: true, // Disable Next.js image optimization (optional)
  },
};

export default nextConfig;
