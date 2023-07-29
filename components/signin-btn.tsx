'use client';

import { signIn } from 'next-auth/react';

export default function SigninBtn() {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/' })}
      className='text-sky-500 font-bold text-xl animate-pulse'
    >
      Continue with Google
    </button>
  );
}
