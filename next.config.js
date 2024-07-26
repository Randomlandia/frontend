/** @type {import('next').NextConfig} */
const nextConfig = {
  // ignoreDuringBuilds: true,
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  env: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
};

module.exports = nextConfig;
