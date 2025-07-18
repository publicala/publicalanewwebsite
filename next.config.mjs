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
  // Add Cloudflare Workers configuration
  experimental: {
    runtime: 'nodejs', // Explicitly use Node.js runtime (NOT edge)
  },
  output: 'standalone', // Required for Workers deployment
}

export default nextConfig
