import { NewspaperIcon, StarIcon } from '@/components/Icons';
import NewsCard from '@/components/NewsCard';
import { getHeadlineNews } from '@/lib/news';
import { mockNewsData } from '@/mockData';

export default async function Home() {
  // const headlineNewsList: NewsList = await getHeadlineNews();
  const newsData: NewsData = mockNewsData;
  const newsList = newsData.value;

  return (
    <main className='py-10 space-y-5'>
      <div className='flex items-center'>
        <div className='flex items-center space-x-2 flex-grow'>
          <NewspaperIcon className='w-8 h-8' />
          <h1 className='text-3xl font-medium'>Headlines</h1>
        </div>
        <button className='flex items-center border border-neutral-400 px-3 py-1.5 rounded-full space-x-2 hover:bg-neutral-200 transition-colors'>
          <StarIcon className='w-5 h-5' />
          <span>Follow</span>
        </button>
      </div>
      <div className='bg-white p-5 rounded-md grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 shadow-md'>
        {newsList.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>
    </main>
  );
}
