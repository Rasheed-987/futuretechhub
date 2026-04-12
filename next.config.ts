import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/courses',
        destination: '/programmes',
        permanent: true,
      },
      {
        source: '/courses/:path*',
        destination: '/programmes',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
