'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkType = {
  category: string;
};

export default function NavLink({ category }: NavLinkType) {
  const pathname = usePathname();

  const href = category === 'home' ? '/' : `/${category}?page=1`;
  const modified = category.charAt(0).toUpperCase() + category.slice(1);

  const active = pathname === href.split('?')[0];

  return (
    <Link
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
