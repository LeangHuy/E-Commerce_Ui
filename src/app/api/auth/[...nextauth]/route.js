import { loginService } from "@/service/auth.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(data) {
        const userData = {
          email: data?.email,
          password: data?.password,
        };
        const userInfo = await loginService(userData);
      },
    }),
  ],
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
