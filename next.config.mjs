/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
