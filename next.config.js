/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["apod.nasa.gov"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add support for TypeScript files
      config.resolve.extensions.push(".ts", ".tsx");
    }
    return config;
  },
};

// module.exports = nextConfig;
module.exports = {
  distDir: "build",
  ...nextConfig,
};
