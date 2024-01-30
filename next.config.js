const path = require('path'); // Tambahkan ini di awal file

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      },
      {
        hostname: "avatars.githubusercontent.com"
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  // tambahkan konfigurasi Next.js lainnya di sini
};

module.exports = nextConfig;
