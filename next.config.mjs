/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ hostname: 'api.badgr.io' }],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
