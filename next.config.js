/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure for GitHub Pages deployment
  // Uncomment and set basePath if deploying to a subdirectory (e.g., /repo-name)
  // basePath: '/Acker-Technologies-Site',
  // assetPrefix: '/Acker-Technologies-Site',
}

module.exports = nextConfig
