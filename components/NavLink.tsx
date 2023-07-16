'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkType = {
  category: string;
};

export default function NavLink({ category }: NavLinkType) {
  const pathname = usePathname();
  const href = '/News/' + category;

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        active
          ? 'text-sky-500'
          : 'text-neutral-600 hover:text-black transition-colors'
      } text-sm font-semibold w-fit`}
    >
      {category}
    </Link>
  );
}
