/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['blanja-app.herokuapp.com', 'drive.google.com']
  }
};

module.exports = nextConfig;
