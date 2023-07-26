import Header from '@/components/Header';
import Loader from '@/components/Loader';

export default function Loading() {
  return (
    <>
      <Header />
      <div className='flex justify-center mt-10'>
        <Loader width='w-10' height='h-10' />
      </div>
    </>
  );
}
