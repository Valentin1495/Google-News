export default function LoadingSkeleton() {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 w-fit mx-auto'>
      <div className='loading-skeleton'></div>
      <div className='loading-skeleton'></div>
      <div className='loading-skeleton'></div>
      <div className='loading-skeleton'></div>
      <div className='loading-skeleton'></div>
      <div className='loading-skeleton'></div>
    </div>
  );
}
