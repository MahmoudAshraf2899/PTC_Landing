import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode:false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ptc-api.ptceg.com",
      },
      {
        protocol: "https",
        hostname: "*.ptceg.com", // Allows subdomains
      }
    ],
  },
};

export default nextConfig;
