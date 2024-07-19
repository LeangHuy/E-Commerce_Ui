export { default } from "next-auth/middleware";

// export const middleware = (req) => {
//   // console.log("middlewarelol", req);
// };

export const config = {
  // specify the route you want to protect
  matcher: [
    // "/",
    "/admin/:path*",
  ],
};
