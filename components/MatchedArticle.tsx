import { formatDistanceToNowStrict } from 'date-fns';
import Image from 'next/image';
import FollowBtn from './FollowBtn';

export default function MatchedArticle({
  name,
  url,
  provider,
  datePublished,
}: News) {
  const { name: providerName, image: providerImage } = provider[0];
  const providerImgSrc = providerImage && providerImage.thumbnail.contentUrl;
  const timeAgo = formatDistanceToNowStrict(new Date(datePublished), {
    addSuffix: true,
  });

  return (
    <div className='bg-white flex flex-col justify-between p-4 rounded-md shadow-sm'>
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          {providerImgSrc ? (
            <section className='relative w-8 h-8 rounded-full overflow-hidden'>
              <Image
                src={providerImgSrc}
                alt='provider pic'
                fill
                priority
                sizes='100%'
                className='object-cover'
              />
            </section>
          ) : (
            <section className='bg-neutral-200 rounded-full w-8 h-8'></section>
          )}
          <section className='font-light w-36 truncate'>{providerName}</section>
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
