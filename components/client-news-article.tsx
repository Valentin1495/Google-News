'use client';

import { formatDistanceToNowStrict } from 'date-fns';
import SaveToggleBtn from './save-toggle-btn';
import { BoomBoxIcon } from './icons';
import StarBtn from './star-btn';
import { useSession } from 'next-auth/react';

interface NewsWithClassName extends News {
  className: string;
}

export default function ClientNewsArticle({
  name,
  url,
  provider,
  datePublished,
  className,
}: NewsWithClassName) {
  const { name: providerName } = provider[0];
  const timeAgo = formatDistanceToNowStrict(new Date(datePublished), {
    addSuffix: true,
  });
  const { data: session } = useSession();

  const newsId = name;

  return (
    <div className={className}>
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          <BoomBoxIcon className='w-5 h-5' />
          <section className='text-sm w-40 truncate'>{providerName}</section>
        </div>
        {session ? (
          <SaveToggleBtn
            providerName={providerName}
            name={name}
            url={url}
            timeAgo={timeAgo}
            newsId={newsId}
          />
        ) : (
          <StarBtn />
        )}
      </div>

      <a
        href={url}
        target='_blank'
        className='article-title text-lg hover:underline hover:underline-offset-4'
      >
        {name}
      </a>

      <h6 className='text-xs font-bold text-neutral-400'>{timeAgo}</h6>
    </div>
  );
}
