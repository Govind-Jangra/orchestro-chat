/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    return config;
  },
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.squarespace-cdn.com',
          pathname: '/content/**',
        },
      ],
      // Alternatively, you can use 'domains' like this:
      // domains: ['images.squarespace-cdn.com'],
    },
};

module.exports = nextConfig;
