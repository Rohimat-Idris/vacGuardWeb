import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true, // ✅ This tells Next.js to skip linting during build
  },
};


export default nextConfig;
