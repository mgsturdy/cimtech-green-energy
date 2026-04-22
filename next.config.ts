import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/what-we-build',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
