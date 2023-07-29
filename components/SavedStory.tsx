import { BoomBoxIcon } from './Icons';
import SaveToggleBtn, { SaveToggleBtnProps } from './SaveToggleBtn';

export default function SavedStory({
  providerName,
  name,
  url,
  timeAgo,
  newsId,
}: SaveToggleBtnProps) {
  return (
    <div className='article-by-query'>
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          <BoomBoxIcon className='w-5 h-5' />
          <h6 className='text-sm w-36 truncate'>{providerName}asdfasdfsdf</h6>
        </div>
        <SaveToggleBtn
          providerName={providerName}
          name={name}
          url={url}
          timeAgo={timeAgo}
          newsId={newsId}
        />
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
