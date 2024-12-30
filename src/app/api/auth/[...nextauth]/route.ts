import NextAuth, { NextAuthOptions, User, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

interface CustomUser extends User {
  role?: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<CustomUser | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Add your authentication logic here
        // For now, we'll use a simple check for demo purposes
        if (credentials.email === process.env.ADMIN_EMAIL && 
            credentials.password === process.env.ADMIN_PASSWORD) {
          return {
            id: '1',
            email: credentials.email,
            role: 'admin'
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT & { role?: string }; user: CustomUser | null }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT & { role?: string } }) {
      if (session?.user) {
        (session.user as CustomUser).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 