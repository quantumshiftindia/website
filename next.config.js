/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "live.staticflickr.com"],
  },
};

module.exports = nextConfig;
