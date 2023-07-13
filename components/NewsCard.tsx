import Image from 'next/image';

export default function NewsCard({
  name,
  url,
  image,
  description,
  provider,
  datePublished,
}: News) {
  return (
    <div>
      {image ? (
        <Image
          src={image.thumbnail.contentUrl}
          alt='thumbnail'
          width={image.thumbnail.width}
          height={image.thumbnail.height}
          className='object-cover'
        />
      ) : null}
    </div>
  );
}
