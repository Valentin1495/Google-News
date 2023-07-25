'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col gap-y-3 justify-center items-center h-[calc(100vh-108px)]'>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='bg-sky-200 rounded-md p-2 text-neutral-500'
      >
        Try again
      </button>
    </div>
  );
}
