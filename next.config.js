/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["apod.nasa.gov"],
  },
};

// module.exports = nextConfig;
module.exports = {
  distDir: "build",
};
