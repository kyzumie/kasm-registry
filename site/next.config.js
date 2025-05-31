/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'kasm-registry',
    description: 'The other store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kyzumie.github.io/kasm-registry/',
    contactUrl: 'https://github.com/kyzumie/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
