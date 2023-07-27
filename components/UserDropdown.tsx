import Image from 'next/image';
import { StarIcon } from './Icons';
import { Dispatch, RefObject, SetStateAction } from 'react';
import Link from 'next/link';
import SignOut from './SignOut';

type UserDropdownProps = {
  user: UserInfo;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  dropdownRef: RefObject<HTMLDivElement>;
};

export default function UserDropdown({
  user,
  show,
  setShow,
  dropdownRef,
}: UserDropdownProps) {
  const { name, email, image } = user;

  return (
    <div
      ref={dropdownRef}
      className={`z-20 absolute right-0 bg-white w-[350px] rounded-xl shadow-lg overflow-hidden transition-opacity ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className='flex items-center gap-x-2 p-3'>
        <Image
          src={image}
          alt='Profile pic'
          width={60}
          height={60}
          className='object-cover rounded-full'
        />
        <div>
          <p className='truncate w-64'>{name}</p>
          <p className='truncate w-64 text-neutral-500'>{email}</p>
        </div>
      </div>
      <SignOut />
      <Link
        onClick={() => setShow(false)}
        href={'/my-saved-stories'}
        className='flex gap-x-3 hover:bg-sky-200 p-3 transition-colors cursor-pointer'
      >
        <StarIcon className='w-6 h-6 text-neutral-600' />
        <p className='text-neutral-600'>Saved stories</p>
      </Link>
    </div>
  );
}
