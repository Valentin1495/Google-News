import Header from '@/components/Header';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Google',
  description:
    'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className='max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
        {children}
      </div>
    </div>
  );
}
