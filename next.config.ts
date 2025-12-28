import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'http://localhost:8080/images/:path*',
      },
    ]
  },
  reactCompiler: true,
};

export default nextConfig;
