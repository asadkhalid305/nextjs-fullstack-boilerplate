/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images2.alphacoders.com"],
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/signup",
        destination: "/auth/signup",
      },
      {
        source: "/admin",
        destination: "/admin/dashboard",
      },
    ];
  },
};

export default nextConfig;
