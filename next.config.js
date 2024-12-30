/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  distDir: 'build',
  output: 'standalone',
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig 