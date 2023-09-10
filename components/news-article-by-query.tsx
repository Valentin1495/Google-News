'use client';

import { formatDistanceToNowStrict } from 'date-fns';
import SaveToggleBtn from './save-toggle-btn';
import { PencilLineIcon } from './icons';
import StarBtn from './star-btn';
import { useSession } from 'next-auth/react';

export default function NewsArticleByQuery({
  byline,
  pub_date,
  headline,
  web_url,
  _id,
}: NewsByQuery) {
  const author = byline.original ?? 'By anonymous';
  const title = headline.main;
  const timeAgo = formatDistanceToNowStrict(new Date(pub_date), {
    addSuffix: true,
  });
  const { data: session } = useSession();
  const newsId = _id.slice('nyt://article/'.length);

  if (!title) return null;

  return (
    <div className='article-container'>
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          <PencilLineIcon className='w-5 h-5' />
          <section className='text-sm w-36 truncate'>{author}</section>
        </div>
        {session ? (
          <SaveToggleBtn
            author={author}
            title={title}
            url={web_url}
            timeAgo={timeAgo}
            newsId={newsId}
          />
        ) : (
          <StarBtn />
        )}
      </div>

      <a
        href={web_url}
        target='_blank'
        className='article-title text-lg hover:underline hover:underline-offset-4'
      >
        {title}
      </a>

      <h6 className='text-xs font-bold text-neutral-400'>{timeAgo}</h6>
    </div>
  );
}
