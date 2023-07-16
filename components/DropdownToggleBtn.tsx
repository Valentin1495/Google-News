'use client';

import {
  Dispatch,
  MouseEvent as mouseEvt,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';
import { EllipsisIcon } from './Icons';

export default function DropdownToggleBtn({
  setShow,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  const handleClick = (e: mouseEvt<HTMLButtonElement>) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };
  const dropdownRef = useRef<HTMLButtonElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <button
      ref={dropdownRef}
      onClick={handleClick}
      className='hover:bg-neutral-200 rounded-full w-fit p-1 transition-colors'
    >
      <EllipsisIcon className='w-5 h-5 sm:hidden' />
    </button>
  );
}
