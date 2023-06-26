import './globals.css';
import NextAuthSessionProvider from '@/providers/SessionProvider';
import ToastProvider from '@/providers/ToastProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HK Blogs',
  description: 'IT Insights',
};

export default async function RootLayout({ children }) {
  // const session = await getServerSession(authOptions);
  // if (!session) redirect('/login');

  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
