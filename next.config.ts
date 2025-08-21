import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cart",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
