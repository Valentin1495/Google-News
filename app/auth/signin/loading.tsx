import Loader from '@/components/loader';

export default function Loading() {
  return (
    <div>
      <div className='flex justify-center min-h-screen items-center'>
        <Loader />
      </div>
    </div>
  );
}
