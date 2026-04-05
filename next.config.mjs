/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mbrvastukalp.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],

  },
  // Suppress hydration warnings for third-party scripts/themes
  experimental: {
    // any experimental features if needed
  }
};

export default nextConfig;
