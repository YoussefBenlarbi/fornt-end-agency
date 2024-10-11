/** @type {import('next').NextConfig} */
const nextConfig = {
  // No need for images configuration for local images
  images: {
    domains: ['www.escortedmoroccotours.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig