'use client';

import { useState } from 'react';
import { categories } from './Navbar';
import NavLink from './NavLink';
import DropdownToggleBtn from './DropdownToggleBtn';

export default function Dropdown() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className='flex justify-center relative'>
      <div
        className={`bg-white shadow-md transition-opacity absolute top-7 right-10 flex flex-col space-y-5 p-5 rounded-md
        ${showMenu ? 'opacity-100' : 'opacity-0'}`}
      >
        {categories.slice(3, 8).map((category, idx) => (
          <NavLink key={idx} category={category} />
        ))}
      </div>

      <DropdownToggleBtn setShow={setShowMenu} />
    </div>
  );
}
