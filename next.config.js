/** @type {import('next').NextConfig} */
const nextConfig = {
  // ignoreDuringBuilds: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
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
  images: {
    domains: ["www.gravatar.com", "cdn.randomlandia.com"],
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: false,
};

module.exports = nextConfig;
