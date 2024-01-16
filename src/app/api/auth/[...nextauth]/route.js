import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOption = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
