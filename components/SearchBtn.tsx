'use client';

import { MagnifyingGlassIcon } from './Icons';

export default function SearchBtn() {
  return (
    <button className='mt-1.5'>
      <MagnifyingGlassIcon className='block sm:hidden w-6 h-6' />
    </button>
  );
}
