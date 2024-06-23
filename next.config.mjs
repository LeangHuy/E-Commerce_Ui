/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PRODUCT_URL: "http://localhost:9090/api/v1",
    NEXT_FILE_URL: "http://localhost:9090/api/v1",
    NEXT_SHOP_URL: "http://localhost:9090/api/v1",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.**.**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
