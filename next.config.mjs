/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // edit: updated to new key. Was previously `allowedForwardedHosts`
      allowedOrigins: ["bn8hkfzn-3000.inc1.devtunnels.ms"],
    },
  },
};

export default nextConfig;
