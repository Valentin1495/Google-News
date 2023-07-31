'use client';

import Image from 'next/image';
import UserDropdown from './user-dropdown';
import { useRef, useState } from 'react';
import HandleOutsideClick from './handle-outside-click';

export default function ProfilePic({ user }: { user: UserInfo }) {
  const { image } = user;
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className='relative h-10'>
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        ref={btnRef}
        className={`border-4 transition-colors rounded-full ${
          showDropdown
            ? 'border-sky-300'
            : 'border-transparent hover:border-sky-200'
        }`}
      >
        <Image
          src={image}
          alt='Profile pic'
          width={40}
          height={40}
          className='object-cover rounded-full'
        />
      </button>

      <UserDropdown
        user={user}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        dropdownRef={dropdownRef}
      />

      <HandleOutsideClick
        dropdownRef={dropdownRef}
        btnRef={btnRef}
        setShowDropdown={setShowDropdown}
      />
    </div>
  );
}
