import { LogOutIcon } from './Icons';
import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <div
      onClick={() => signOut()}
      className='flex gap-x-3 hover:bg-sky-200 p-3 transition-colors cursor-pointer'
    >
      <LogOutIcon className='w-6 h-6' />
      <p>Sign out</p>
    </div>
  );
}
