import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "is.gd",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
