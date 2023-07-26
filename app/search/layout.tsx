import '@/app/globals.css';
import Header from '@/components/Header';
import Providers from '@/providers';

export default function NewsSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      <div className='max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
        {children}
      </div>
    </Providers>
  );
}
