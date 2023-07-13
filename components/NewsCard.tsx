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
  const providerImgSrc = providerImage.thumbnail.contentUrl;
  const timeAgo = formatDistanceToNowStrict(new Date(datePublished), {
    addSuffix: true,
  });

  return (
    <div>
      <div className='relative aspect-video w-full rounded-md overflow-hidden'>
        {image ? (
          <Image
            src={image.thumbnail.contentUrl}
            alt='article thumbnail'
            fill
            priority
            className='object-cover'
          />
        ) : (
          <section className='aspect-video w-full rounded-md bg-neutral-200'></section>
        )}
      </div>

      <div className='flex items-center space-x-2 my-2'>
        <section className='relative w-8 h-8 rounded-full overflow-hidden'>
          <Image
            src={providerImgSrc}
            alt='provider pic'
            fill
            priority
            className='object-cover'
          />
        </section>
        <span>{providerName}</span>
      </div>

      <a href={url} target='_blank' className='article-title text-lg'>
        {name}
      </a>

      <h6 className='text-sm'>{timeAgo}</h6>
    </div>
  );
}
