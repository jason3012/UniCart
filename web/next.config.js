const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {
    root: path.resolve(__dirname, '..'),
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.zara.net' },
      { protocol: 'https', hostname: '*.zara.net' },
      { protocol: 'https', hostname: 'im.uniqlo.com' },
      { protocol: 'https', hostname: '*.uniqlo.com' },
      { protocol: 'https', hostname: 'media.cos.com' },
      { protocol: 'https', hostname: '*.scene7.com' },
      { protocol: 'https', hostname: 'bananarepublic.gap.com' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'www.jcrew.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
};

module.exports = nextConfig;
