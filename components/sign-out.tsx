import { LogOutIcon } from './icons';
import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <div
      onClick={() => signOut({ callbackUrl: '/' })}
      className='flex gap-x-3 text-neutral-600 hover:bg-neutral-100 p-3 transition-colors cursor-pointer'
    >
      <LogOutIcon className='w-6 h-6 text-neutral-600' />
      <p>Sign out</p>
    </div>
  );
}
