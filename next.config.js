/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    NEXT_APP_PROD: "Production",
    NEXT_APP_VERSION: process.env.npm_package_version
  },

  async redirects() {
    return [
      {
        source: "/source",
        destination: "https://github.com/Naibuu/discord-profile",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
