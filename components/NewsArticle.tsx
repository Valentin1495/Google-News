import { formatDistanceToNowStrict } from 'date-fns';
import SaveBtn from './SaveBtn';
import { BoomBoxIcon } from './Icons';

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
  const { name: providerName } = provider[0];
  const timeAgo = formatDistanceToNowStrict(new Date(datePublished), {
    addSuffix: true,
  });

  return (
    <div className={className}>
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          <BoomBoxIcon className='w-5 h-5' />
          <section className='font-light w-52 truncate'>{providerName}</section>
        </div>
        <SaveBtn />
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
