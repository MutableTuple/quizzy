/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // edit: updated to new key. Was previously `allowedForwardedHosts`
      allowedOrigins: ["https://quizzy-yoz2.vercel.app/"],
    },
  },
};

export default nextConfig;
