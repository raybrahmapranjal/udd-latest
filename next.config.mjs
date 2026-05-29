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
downloadFile('https://udd-latest.vercel.app/map.png', './public/map.png');
downloadFile('https://udd-latest.vercel.app/assammap.png', './public/assammap.png');
downloadFile('https://uddbtr.online/images/hagrama_mohilary.jpg', './public/images/leaders/hagrama_mohilary.jpg');
downloadFile('https://uddbtr.online/images/moon_moon_brahma.jpg', './public/images/leaders/moon_moon_brahma.jpg');
downloadFile('https://uddbtr.online/images/lankeshwar_owarie.jpg', './public/images/leaders/lankeshwar_owarie.jpg');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
