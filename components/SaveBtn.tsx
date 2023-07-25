'use client';

import { StarIcon } from './Icons';

export default function SaveBtn() {
  return (
    <button
      onClick={() => {}}
      className='flex items-center p-1.5 rounded-full hover:bg-neutral-200 transition-colors'
    >
      <StarIcon className='w-5 h-5' />
    </button>
  );
}
