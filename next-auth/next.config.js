/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const customConfig = {
  env: {
    customKey: 'my-value',
  },
}
module.exports = nextConfig, customConfig
