/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.discord.app', 'media.discordapp.net'],
  },
}

module.exports = nextConfig