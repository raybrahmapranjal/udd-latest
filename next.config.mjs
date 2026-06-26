

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'udd-latest.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.abacus.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bodoland.gov.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
