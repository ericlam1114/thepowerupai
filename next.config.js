/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FB_PIXEL_ID: process.env.FB_PIXEL_ID,
  },
  transpilePackages: ['sparkloop']
};

module.exports = nextConfig;
