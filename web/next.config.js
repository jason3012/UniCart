/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.zara.net' },
      { protocol: 'https', hostname: '*.zara.net' },
      { protocol: 'https', hostname: 'im.uniqlo.com' },
      { protocol: 'https', hostname: '*.uniqlo.com' },
    ],
  },
};

module.exports = nextConfig;
