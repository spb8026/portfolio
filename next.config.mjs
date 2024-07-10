/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
