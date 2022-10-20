/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/register',
        destination: 'http://localhost:5000/api/users' // Proxy to Backend
      },
      {
        source: '/login',
        destination: 'http://localhost:5000/api/users/login' // Proxy to Backend
      }
    ]
  }
}
