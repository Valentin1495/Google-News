import { formatDistanceToNowStrict } from 'date-fns';
import SaveToggleBtn from './SaveToggleBtn';
import { BoomBoxIcon } from './Icons';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import StarBtn from './StarBtn';

interface NewsWithClassName extends News {
  className: string;
}

export default async function NewsArticle({
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
  const session = await getServerSession(authOptions);

  return (
    <div className={className}>
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          <BoomBoxIcon className='w-5 h-5' />
          <section className='text-sm w-52 truncate'>{providerName}</section>
        </div>
        {session ? (
          <SaveToggleBtn
            providerName={providerName}
            name={name}
            url={url}
            timeAgo={timeAgo}
            newsId={url}
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
