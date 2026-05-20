/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uddbtr.online',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.abacus.ai',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
