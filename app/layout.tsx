import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Google',
  description: 'Google',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-sky-50'>
      <body className={`${figtree.className}`}>{children}</body>
    </html>
  );
}
