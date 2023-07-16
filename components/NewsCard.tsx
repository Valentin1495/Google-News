import { formatDistanceToNowStrict } from 'date-fns';
import Image from 'next/image';

export default function NewsCard({
  name,
  url,
  image,
  provider,
  datePublished,
}: News) {
  const { name: providerName, image: providerImage } = provider[0];
  const providerImgSrc = providerImage && providerImage.thumbnail.contentUrl;
  const timeAgo = formatDistanceToNowStrict(new Date(datePublished), {
    addSuffix: true,
  });

  return (
    <div>
      <div className='relative aspect-video w-full rounded-xl overflow-hidden'>
        {image ? (
          <Image
            src={image.thumbnail.contentUrl}
            alt='article thumbnail'
            fill
            priority
            sizes='100%'
            className='object-cover'
          />
        ) : (
          <section className='aspect-video w-full rounded-md bg-neutral-200'></section>
        )}
      </div>

      <div className='flex items-center space-x-2 my-2'>
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
          <div className='bg-neutral-200 rounded-full w-8 h-8'></div>
        )}
        <span className='font-light'>{providerName}</span>
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
