import NextAuthSessionProvider from '@/providers/sessionProvider';
import './globals.css';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HK Blogs',
  description: 'IT Insights',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
