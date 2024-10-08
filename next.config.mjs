import withPWA from "@ducanh2912/next-pwa";

const pwaConfig = {
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // edit: updated to new key. Was previously `allowedForwardedHosts`
      allowedOrigins: [
        "https://quizzy.webbstack.com/",
        "https://quizzy-yoz2.vercel.app/",
      ],
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/MutableTuple/fm_images/main/**",
      },
    ],
  },
};

export default nextConfig;
