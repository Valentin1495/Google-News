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
    <div className='sm:hidden relative'>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className='hover:bg-neutral-200 rounded-full w-fit p-1 transition-colors absolute right-0'
      >
        <EllipsisIcon className='w-5 h-5' />
      </button>

      <div
        ref={dropdownRef}
        className={`bg-white shadow-md transition-opacity flex flex-col space-y-5 p-5 rounded-md absolute right-0 top-8
          ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {categories.slice(3, 8).map((category, idx) => (
          <NavLink key={idx} category={category} setShowMenu={setShowMenu} />
        ))}
      </div>
    </div>
  );
}
