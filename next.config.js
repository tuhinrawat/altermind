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
  },
  basePath: '',
  assetPrefix: '',
  env: {
    projectName: 'altermind_blog'
  }
}

module.exports = nextConfig 