export { default } from "next-auth/middleware";

export const config = {
  // specify the route you want to protect
  matcher: [
    "/profile",
    "/view/bookmark",
    "/view/action",
    "/view/history",
    "/view/cart",
    "/admin/:path*",
  ],
};
