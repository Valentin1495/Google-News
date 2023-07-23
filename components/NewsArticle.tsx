import { formatDistanceToNowStrict } from 'date-fns';
import Image from 'next/image';
import FollowBtn from './FollowBtn';

interface NewsWithClassName extends News {
  className: string;
}

export default function NewsArticle({
  name,
  url,
  provider,
  datePublished,
  className,
}: NewsWithClassName) {
  const { name: providerName, image: providerImage } = provider[0];
  const providerImgSrc = providerImage && providerImage.thumbnail.contentUrl;
  const timeAgo = formatDistanceToNowStrict(new Date(datePublished), {
    addSuffix: true,
  });

  return (
    <div className={className}>
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          {providerImgSrc ? (
            <Image
              src={providerImgSrc}
              alt='News provider picture'
              width={32}
              height={32}
              className='object-cover rounded-full'
            />
          ) : (
            <section className='bg-neutral-200 rounded-full w-8 h-8'></section>
          )}
          <section className='font-light w-44 truncate'>{providerName}</section>
        </div>
        <FollowBtn />
      </div>

      <a
        href={url}
        target='_blank'
        className='article-title text-lg hover:underline hover:underline-offset-4'
      >
        {name}
      </a>

      <h6 className='text-sm text-neutral-500'>{timeAgo}</h6>
    </div>
  );
}
