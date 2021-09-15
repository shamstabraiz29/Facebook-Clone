
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:  [
      'links.papareact.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.google.apis.com'

    ],
  },
}

module.exports = withPlugins([[withImages]], nextConfig)