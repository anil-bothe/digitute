/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "",
  assetPrefix: ""
}

module.exports = nextConfig