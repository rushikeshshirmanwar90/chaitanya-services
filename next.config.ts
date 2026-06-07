import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from any https host so the admin can paste any image URL.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
