/** @type {import('next').NextConfig} */
const nextConfig = {
  // No need for images configuration for local images
  images: {
    domains: ['127.0.0.1', 'localhost'], // Add this if you're also using external image URLs
  },
}

module.exports = nextConfig