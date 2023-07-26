import Header from '@/components/Header';
import LoadingSkeleton from '@/components/LoadingSkeleton';

export default function Loading() {
  return (
    <>
      <Header />
      <div className='max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
        <LoadingSkeleton />
      </div>
    </>
  );
}
