'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

type NavLinkType = {
  category: string;
  setShowDropdown?: Dispatch<SetStateAction<boolean>>;
};

export default function NavLink({ category, setShowDropdown }: NavLinkType) {
  const params = useParams();

  const href = category === 'home' ? '/' : `/${category}?page=1`;
  const modified = category[0].toUpperCase() + category.slice(1);

  const active = params.category === category;

  return (
    <Link
      onClick={() => setShowDropdown && setShowDropdown(false)}
      href={href}
      className={`${
        active
          ? 'text-sky-500'
          : 'text-neutral-600 hover:text-black transition-colors'
      } text-sm font-semibold w-fit`}
    >
      {modified}
    </Link>
  );
}
