'use client';

import { useEffect, useRef, useState } from 'react';
import { categories } from './Navbar';
import NavLink from './NavLink';
import { EllipsisIcon } from './Icons';

export default function Dropdown() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className='flex justify-center relative sm:hidden'>
      <div
        ref={dropdownRef}
        className={`bg-white shadow-md transition-opacity absolute top-7 right-10 flex flex-col space-y-5 p-5 rounded-md
        ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {categories.slice(3, 8).map((category, idx) => (
          <NavLink key={idx} category={category} setShowMenu={setShowMenu} />
        ))}
      </div>

      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className='hover:bg-neutral-200 rounded-full w-fit p-1 transition-colors'
      >
        <EllipsisIcon className='w-5 h-5' />
      </button>
    </div>
  );
}
