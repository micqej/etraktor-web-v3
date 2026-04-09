/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.etraktor.sk' },
      { protocol: 'https', hostname: 'fonts.googleapis.com' },
    ],
  },
}

module.exports = nextConfig
