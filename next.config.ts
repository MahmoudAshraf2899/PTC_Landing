import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode:false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ptc-api.ptceg.com",
      },
    ],
  },
};

export default nextConfig;
