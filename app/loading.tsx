import Loader from '@/components/Loader';

export default function Loading() {
  return (
    <div className='flex justify-center mt-10'>
      <Loader width='w-10' height='h-10' />
    </div>
  );
}
