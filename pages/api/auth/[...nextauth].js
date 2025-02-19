import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        return await verify(credentials);
      },
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  events: {
      async error(message) {
          console.error("NextAuth.js error:", message); // Very important!
      }
  }
});
