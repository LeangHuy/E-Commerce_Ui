/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PRODUCT_URL: "http://localhost:9090/api/v1",
    NEXT_FILE_URL: "http://localhost:9090/api/v1",
    NEXT_SHOP_URL: "http://localhost:9090/api/v1",
    NEXT_BASE_URL: "http://localhost:9090/api/v1",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.**" || "**.**.**" || "**.**.**.**" || "**.**.**.**.**",
        port: "",
      },
      {
        protocol: "http",
        hostname: "**.**" || "**.**.**" || "**.**.**.**" || "**.**.**.**.**",
        port: "**",
      },
    ],
    domains: ["localhost", "34.143.196.56"],
  },
};

export default nextConfig;
// 34.143.196.56
