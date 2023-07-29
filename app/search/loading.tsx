import LoadingSkeleton from '@/components/loading-skeleton';

export default function Loading() {
  return (
    <div className='max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
      <LoadingSkeleton />
    </div>
  );
}
