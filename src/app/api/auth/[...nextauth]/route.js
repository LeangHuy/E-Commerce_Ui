import { routePath } from "@/constants/route-path";
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
          email: data?.username,
          password: data?.password,
        };
        const token = await loginService(userData);
        if (token?.token) {
          return token;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: routePath.LOGIN,
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, account, user }) {
      return user;
    },
    async session({ session, token, user }) {
      return session;
    },
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
