/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  env: {
    API_BASE_URL: 'https://whoknows-portfolio.netlify.app',
    API_CHECK_URL: 'https://is-alive.whoknows.workers.dev/check'
  }
}

module.exports = nextConfig
