/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
    unoptimized: true,
  },
};

export default nextConfig;
