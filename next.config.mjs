import fs from 'fs';
import https from 'https';

function downloadFile(url, dest) {
  try {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${dest} successfully via redirect`);
          });
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${dest} successfully`);
        });
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err);
    });
  } catch (err) {
    console.error(`Exception downloading ${url}:`, err);
  }
}

console.log("Downloading updated favicon and maps from official sources...");
downloadFile('https://uddbtr.online/favicon.png', './public/favicon.png');
downloadFile('https://bodoland.gov.in/assets/img/map.png', './public/map.png');
downloadFile('https://bodoland.gov.in/assets/img/assammap.png', './public/assammap.png');

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
