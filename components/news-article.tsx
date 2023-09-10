import { formatDistanceToNowStrict } from 'date-fns';
import SaveToggleBtn from './save-toggle-btn';
import { PencilLineIcon } from './icons';
import { getServerSession } from 'next-auth';
import StarBtn from './star-btn';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Image from 'next/image';

export default async function NewsArticle({
  byline,
  multimedia,
  published_date,
  title,
  url,
}: News) {
  const author = byline;
  const timeAgo = formatDistanceToNowStrict(new Date(published_date), {
    addSuffix: true,
  });
  const session = await getServerSession(authOptions);
  const newsId = title;

  if (!multimedia || !title) return null;

  const { url: imgSrc, caption } = multimedia[1];

  return (
    <div>
      <Image
        src={imgSrc}
        alt={caption}
        width={300}
        height={200}
        priority
        className='rounded-md'
      />
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          <PencilLineIcon className='w-5 h-5' />
          <section className='text-sm w-36 truncate'>{author}</section>
        </div>
        {session ? (
          <SaveToggleBtn
            author={author}
            title={title}
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
        {title}
      </a>

      <h6 className='text-xs font-bold text-neutral-400'>{timeAgo}</h6>
    </div>
  );
}
