'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

type PageLinkProps = {
  href: string;
  children: ReactNode;
};

export default function PageLink({ href, children }: PageLinkProps) {
  const searchParams = useSearchParams();

  const active = searchParams.get('page') === href[href.length - 1];

  return (
    <Link
      href={href}
      className={`${
        active
          ? 'text-sky-500 font-bold'
          : 'text-neutral-600 hover:scale-125 transition-transform'
      } inline-block`}
    >
      {children}
    </Link>
  );
}
