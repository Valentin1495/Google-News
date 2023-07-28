'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function Signin() {
  return (
    <div className='flex justify-center min-h-screen items-center flex-col'>
      <Image src={'/icon.png'} alt='Google news logo' width={70} height={70} />
      <button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className='text-sky-500 font-bold text-xl animate-pulse'
      >
        Sign in
      </button>
    </div>
  );
}
