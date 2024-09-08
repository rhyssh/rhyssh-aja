/* eslint-disable @typescript-eslint/no-unused-vars */
import nextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        name: { label: "Username", type: "text" },
      },
      async authorize(credentials) {
        const { name } = credentials as { name: string };
        // Simpan id sementara untuk memenuhi tipe User
        if (name) {
          return { id: name, name }; // Perlu tambahkan properti id
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.name = user.name;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("name" in token) {
        session.user.name = token.name;
      }

      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

export default nextAuth(authOptions);
