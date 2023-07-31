import Loader from '@/components/loader';

export default function Loading() {
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <Loader />
      </div>
    </div>
  );
}
