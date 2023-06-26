import './globals.css';
import NextAuthSessionProvider from '@/providers/SessionProvider';
import ToastProvider from '@/providers/ToastProvider';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HK Blogs',
  description: 'IT Insights',
};

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <ToastProvider />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
