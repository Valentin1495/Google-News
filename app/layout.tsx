import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google News',
  description:
    'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-sky-50'>
      <body>{children}</body>
    </html>
  );
}
