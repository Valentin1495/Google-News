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
  const author = byline ? byline.substring(3) : 'Anonymous';

  const timeAgo = formatDistanceToNowStrict(new Date(published_date), {
    addSuffix: true,
  });
  const session = await getServerSession(authOptions);
  const newsId = title;

  if (!multimedia || !title) return null;

  const { url: imgSrc, caption, blurredDataUrl } = multimedia[1];

  return (
    <div>
      <section className='relative w-full aspect-[3/2] rounded-md overflow-hidden'>
        <Image
          src={imgSrc}
          alt={caption}
          fill
          priority
          sizes='(min-width: 1280px) 357px, (min-width: 1040px) 272px, (min-width: 780px) 306px, (min-width: 640px) 226px, (min-width: 380px) 280px, calc(33.33vw + 160px)'
          className='object-cover'
          placeholder='blur'
          blurDataURL={blurredDataUrl}
        />
      </section>
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
