import { PencilLineIcon } from './icons';
import SaveToggleBtn, { SaveToggleBtnProps } from './save-toggle-btn';

export default function SavedStory({
  author,
  title,
  url,
  timeAgo,
  newsId,
}: SaveToggleBtnProps) {
  return (
    <div className='article-container'>
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          <PencilLineIcon className='w-5 h-5' />
          <h6 className='text-sm w-36 truncate'>{author}</h6>
        </div>
        <SaveToggleBtn
          author={author}
          title={title}
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
        {title}
      </a>

      <h6 className='text-xs font-bold text-neutral-400'>{timeAgo}</h6>
    </div>
  );
}
