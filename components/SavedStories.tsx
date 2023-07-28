'use client';

import db from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import SavedStory from './SavedStory';
import { NewspaperIcon } from './Icons';
import { SaveToggleBtnProps } from './SaveToggleBtn';

export default function SavedStories() {
  const { data: session } = useSession();
  const email = session?.user?.email as string;

  const [stories] = useCollection(
    query(
      collection(db, 'users', email, 'saved stories'),
      orderBy('createdAt', 'desc')
    )
  );

  return (
    <div className='py-10 space-y-5'>
      <div className='flex items-center gap-x-2 '>
        <NewspaperIcon className='w-8 h-8' />
        <h1 className='text-3xl font-medium'>Saved stories</h1>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {stories?.docs.map((doc) => {
          const data = doc.data() as SaveToggleBtnProps;

          return <SavedStory key={doc.id} {...data} />;
        })}
      </div>
    </div>
  );
}
