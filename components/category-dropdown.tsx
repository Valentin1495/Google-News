'use client';

import { useRef, useState } from 'react';
import { categories } from './navbar';
import NavLink from './nav-link';
import { EllipsisIcon } from './icons';
import HandleOutsideClick from './handle-outside-click';

export default function CategoryDropdown() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className='sm:hidden relative'>
      <button
        ref={btnRef}
        onClick={() => setShowDropdown((prev) => !prev)}
        className='hover:bg-neutral-200 rounded-full w-fit p-1 transition-colors absolute right-0'
      >
        <EllipsisIcon className='w-5 h-5' />
      </button>

      <div
        ref={dropdownRef}
        className={`bg-white shadow-md transition-opacity flex flex-col space-y-5 p-5 rounded-md absolute right-0 top-8
          ${showDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {categories.slice(3, 8).map((category, idx) => (
          <NavLink
            key={idx}
            category={category}
            setShowDropdown={setShowDropdown}
          />
        ))}
      </div>

      <HandleOutsideClick
        btnRef={btnRef}
        dropdownRef={dropdownRef}
        setShowDropdown={setShowDropdown}
      />
    </div>
  );
}
