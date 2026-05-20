import fs from 'fs';
import https from 'https';

console.log("Downloading updated favicon from CDN...");
const url = 'https://uddbtr.online/favicon.png';
const dest = './public/favicon.png';

try {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
      https.get(response.headers.location, (res) => {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Favicon downloaded successfully from redirect inside next.config.mjs');
        });
      });
    } else {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Favicon downloaded successfully inside next.config.mjs');
      });
    }
  });
} catch (err) {
  console.error("Error downloading favicon in config:", err);
}

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
