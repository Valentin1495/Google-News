'use client';

import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from './Icons';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const router = useRouter();

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/News/search?q=' + searchQuery);
  };

  return (
    <form
      className={`hidden sm:flex items-center justify-between bg-neutral-100 transition-all px-3.5 py-2.5 rounded-lg w-3/5 ${
        inputFocused && 'bg-white shadow-md'
      }`}
      onSubmit={search}
    >
      <button
        type='submit'
        className='hover:bg-neutral-200 transition-colors rounded-full p-2 disabled:cursor-not-allowed'
        disabled={!searchQuery.trim()}
      >
        <MagnifyingGlassIcon className='w-5 h-5' />
      </button>
      <input
        type='text'
        value={searchQuery}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
        className='bg-transparent outline-none w-full mx-3.5'
        placeholder='Search for topics, locations & sources'
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      <button
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setSearchQuery('');
        }}
        className='hover:bg-neutral-200 transition-colors p-1.5 rounded-full'
      >
        <XMarkIcon className='w-5 h-5' />
      </button>
    </form>
  );
}
