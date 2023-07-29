import '@/app/globals.css';
import Header from '@/components/header';

export default function SavedStoriesLayout({
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
