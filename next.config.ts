/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🔥 THIS FIX
  },
};

module.exports = nextConfig;