export default function LoadingSkeleton() {
  return (
    <div className='my-10 flex justify-center'>
      <div className='space-y-10'>
        <p className='w-40 h-8 bg-neutral-200 rounded-md shadow-md animate-pulse'></p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          <div className='loading-skeleton'></div>
          <div className='loading-skeleton'></div>
          <div className='loading-skeleton'></div>
          <div className='loading-skeleton'></div>
          <div className='loading-skeleton'></div>
          <div className='loading-skeleton'></div>
        </div>
      </div>
    </div>
  );
}
