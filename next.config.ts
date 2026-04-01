import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/what-we-build',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
