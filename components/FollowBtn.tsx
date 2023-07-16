'use client';

import { StarIcon } from './Icons';

export default function FollowBtn() {
  return (
    <button
      onClick={() => {}}
      className='flex items-center sm:border border-neutral-400 p-1.5 sm:px-3 sm:py-1.5 rounded-full space-x-2 hover:bg-neutral-200 transition-colors'
    >
      <StarIcon className='w-6 h-6 sm:w-5 sm:h-5' />
      <span className='hidden sm:inline'>Follow</span>
    </button>
  );
}
