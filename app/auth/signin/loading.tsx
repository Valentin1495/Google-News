import Loader from '@/components/Loader';

export default function Loading() {
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <Loader width='w-10' height='h-10' />
    </div>
  );
}
