/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PRODUCT_URL: "http://34.143.196.56:9090/api/v1",
    NEXT_FILE_URL: "http://34.143.196.56:9090/api/v1",
    NEXT_SHOP_URL: "http://34.143.196.56:9090/api/v1",
    NEXT_BASE_URL: "http://34.143.196.56:9090/api/v1",
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
    // domains: ["localhost", "localhost"],
    domains: ["34.143.196.56"]
    // domains: ["*"]
  },
};

export default nextConfig;
// localhost
