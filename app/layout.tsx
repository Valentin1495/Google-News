import Header from '@/components/Header';
import './globals.css';
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
      <body>
        <Header />
        <div className='max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
