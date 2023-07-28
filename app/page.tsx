import Header from '@/components/Header';
import { NewspaperIcon } from '@/components/Icons';
import NewsArticle from '@/components/NewsArticle';
import { mockNewsByCategory } from '@/mockData';

export default async function Home() {
  // const headlineNewsData = await getHeadlineNews();
  const headlineNewsData: NewsData = mockNewsByCategory;
  const headlineNewsList = headlineNewsData.value;

  return (
    <main>
      <Header />
      <div className='max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
        <div className='py-10 space-y-5'>
          <div className='flex items-center gap-x-2 '>
            <NewspaperIcon className='w-8 h-8' />
            <h1 className='text-3xl font-medium'>Headlines</h1>
          </div>

          <div className='bg-white p-5 rounded-md flex flex-col md:flex-row md:gap-x-4 shadow-md h-full'>
            <div className='flex flex-col gap-y-4 md:w-1/2'>
              {headlineNewsList.slice(0, 6).map((news) => (
                <NewsArticle
                  key={news.url}
                  {...news}
                  className='article-by-category'
                />
              ))}
            </div>

            <div className='bg-neutral-200 h-[1.5px] md:h-auto md:w-[2px] mb-4 md:mb-0'></div>

            <div className='flex flex-col gap-y-4 md:w-1/2'>
              {headlineNewsList.slice(6, 12).map((news) => (
                <NewsArticle
                  key={news.url}
                  {...news}
                  className='article-by-category'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
