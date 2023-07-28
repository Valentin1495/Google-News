'use client';

import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { OutlineStarIcon, SolidStarIcon } from './Icons';
import db from '@/firebase';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from 'react';

export type SaveToggleBtnProps = {
  providerName: string;
  name: string;
  url: string;
  timeAgo: string;
  newsId: string;
};

export default function SaveToggleBtn({
  providerName,
  name,
  url,
  timeAgo,
  newsId,
}: SaveToggleBtnProps) {
  const [saved, setSaved] = useState<boolean>(false);
  const { data: session } = useSession();
  const email = session?.user?.email as string;

  const [savedStories] = useCollection(
    collection(db, 'users', email, 'saved stories')
  );

  useEffect(() => {
    savedStories?.docs.find((doc) => doc.id === newsId)
      ? setSaved(true)
      : setSaved(false);
  }, [savedStories, newsId]);

  const saveStory = async () => {
    await setDoc(doc(db, 'users', email, 'saved stories', newsId), {
      createdAt: serverTimestamp(),
      providerName,
      name,
      url,
      timeAgo,
      newsId,
    });
  };

  const unsaveStory = async () => {
    await deleteDoc(doc(db, 'users', email, 'saved stories', newsId));
  };

  return saved ? (
    <button
      onClick={unsaveStory}
      className='flex items-center p-1.5 rounded-full hover:bg-neutral-200 transition-colors'
    >
      <SolidStarIcon className='w-5 h-5 text-sky-500' />
    </button>
  ) : (
    <button
      onClick={saveStory}
      className='flex items-center p-1.5 rounded-full hover:bg-neutral-200 transition-colors'
    >
      <OutlineStarIcon className='w-5 h-5' />
    </button>
  );
}
