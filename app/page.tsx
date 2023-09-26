import Header from '@/components/header';
import { NewspaperIcon } from '@/components/icons';
import NewsArticle from '@/components/news-article';
import { fetchHomepage } from '@/lib/fetch-homepage';
import addBlurredDataUrls from '@/lib/get-base64';
import { sortByNewest } from '@/lib/sort-by-newest';

export default async function Home() {
  const newsData: NewsData = await fetchHomepage();
  const newsList = newsData.results;
  const modifiedNewsList = await addBlurredDataUrls(newsList);
  const sortedOne = sortByNewest(modifiedNewsList);

  return (
    <main>
      <Header />
      <div className='max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
        <div className='py-10 space-y-5'>
          <div className='flex items-center gap-x-2 '>
            <NewspaperIcon className='w-8 h-8' />
            <h1 className='text-3xl font-medium'>Home</h1>
          </div>

          <div className='bg-white p-5 rounded-md shadow-md'>
            <section className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {sortedOne.slice(0, 6).map((news, i) => (
                <NewsArticle key={news.url} {...news} idx={i} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
