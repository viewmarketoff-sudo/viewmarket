/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for optimized Docker builds
  // This creates a minimal production bundle with only necessary dependencies
  output: 'standalone',
};

export default nextConfig;
