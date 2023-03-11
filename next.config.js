/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  env: {
    STATICS_BASE_URL: 'https://personal-data-api.netlify.app',
    API_BASE_URL:
      'https://personal-data-api.netlify.app/.netlify/functions/api',
    API_CHECK_URL: 'https://is-alive.whoknows.workers.dev/check'
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'personal-data-api.netlify.app'
      }
    ]
  }
}

module.exports = nextConfig
