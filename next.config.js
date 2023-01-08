/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: 'https://personal-data-api.vercel.app'
  }
}

module.exports = nextConfig
