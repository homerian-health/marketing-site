/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',
  // assetPrefix: '/.',
  // compress: false,
  // skipTrailingSlashRedirect: true,
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig