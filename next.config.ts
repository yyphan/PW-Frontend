import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'https://api.yyphan.com/images/:path*',
      },
    ]
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.yyphan.com',
      },
    ],
  },

  reactCompiler: true,
};

export default nextConfig;
