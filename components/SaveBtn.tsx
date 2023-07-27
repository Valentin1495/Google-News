'use client';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { StarIcon } from './Icons';
import db from '@/firebase';
import { useSession } from 'next-auth/react';

export type SaveBtnProps = {
  providerName: string;
  name: string;
  url: string;
  timeAgo: string;
};

export default function SaveBtn({
  providerName,
  name,
  url,
  timeAgo,
}: SaveBtnProps) {
  const { data: session } = useSession();
  const email = session?.user?.email as string;

  const saveStory = async () => {
    await addDoc(collection(db, 'users', email, 'saved stories'), {
      createdAt: serverTimestamp(),
      providerName,
      name,
      url,
      timeAgo,
    });
  };

  return (
    <button
      onClick={saveStory}
      className='flex items-center p-1.5 rounded-full hover:bg-neutral-200 transition-colors'
    >
      <StarIcon className='w-5 h-5' />
    </button>
  );
}
