import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password' },
      },

      authorize: (credentials, req) => {
        // perform database operation to check if the user exists

        const user = {
          id: '1',
          username: 'Khan',
          email: 'khan@gmail.com',
        };

        if (credentials?.email === 'khan@gmail.com' && credentials.password === '3333') {
          return user;
        }

        return null;
      },
    }),
  ],

  pages: { signIn: '/api/auth/login' },

  session: {
    strategy: 'jwt',
    maxAge: 86400,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
