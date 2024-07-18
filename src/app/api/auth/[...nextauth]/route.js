import { routePath } from "@/constants/route-path";
import { loginService } from "@/service/auth.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: "",
        password: "",
      },
      async authorize(data) {
        const userData = {
          email: data?.username,
          password: data?.password,
        };
        const token = await loginService(userData);
        console.log("usertoken", token);
        // return token

        switch (token.detail) {
          case "Invalid Password":
            throw new Error(token.detail);
          case "Invalid email":
            throw new Error(token.detail);
          case "Your account is not verify yet":
            throw new Error(token.detail);
        }
        if (token?.payload.token) {
          return token;
        } else {
          return;
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
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = token.user;
      session.user.id = token.id;
      return session;
    },
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
