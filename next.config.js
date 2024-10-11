/** @type {import('next').NextConfig} */
const nextConfig = {
  // No need for images configuration for local images
  images: {
    domains: ['localhost', '127.0.0.1', 'www.escortedmoroccotours.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig