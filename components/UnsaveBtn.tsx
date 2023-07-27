'use client';

import { deleteDoc, doc } from 'firebase/firestore';
import { StarOffIcon } from './Icons';
import db from '@/firebase';
import { useSession } from 'next-auth/react';
import { SavedStoryProps } from './SavedStory';

type UnsaveBtnProps = Pick<SavedStoryProps, 'storyId'>;

export default function UnsaveBtn({ storyId }: UnsaveBtnProps) {
  const { data: session } = useSession();
  const email = session?.user?.email as string;

  const unsaveStory = async () => {
    await deleteDoc(doc(db, 'users', email, 'saved stories', storyId));
  };

  return (
    <button
      onClick={unsaveStory}
      className='flex items-center p-1.5 rounded-full hover:bg-neutral-200 transition-colors'
    >
      <StarOffIcon className='w-5 h-5' />
    </button>
  );
}
