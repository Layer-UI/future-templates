/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/site',
        permanent: true,
      },
    ]
  },

  reactStrictMode: true,
  transpilePackages: ["@repo/ui","portfolio"],
};
