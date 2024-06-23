/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'jp', 'cn'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
