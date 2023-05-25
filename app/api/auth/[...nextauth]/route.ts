import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
//   database: process.env.DATABASE_URL,
};

console.log("authOptions")
console.log(process.env.GOOGLE_ID)
console.log(process.env.GOOGLE_SECRET)

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
