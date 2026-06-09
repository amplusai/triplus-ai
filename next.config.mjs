/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.amplusai.com",
      },
      {
        protocol: "https",
        hostname: "amplusai.com",
      },
    ],
  },
};

export default nextConfig;
