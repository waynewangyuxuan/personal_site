/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
