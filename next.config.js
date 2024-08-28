/** @type {import('next').NextConfig} */
const nextConfig = {
  // No need for images configuration for local images
  images: {
    domains: ['www.turio-wp.egenslab.com'], // Add this if you're also using external image URLs
  },
}

module.exports = nextConfig