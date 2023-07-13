import NewsCard from '@/components/NewsCard';
import { getHeadlineNews } from '@/lib/news';
import { mockNewsData } from '@/mockData';

export default async function Home() {
  // const headlineNewsList: NewsList = await getHeadlineNews();
  const newsData: NewsData = mockNewsData;
  const newsList = newsData.value;

  return (
    <main>
      <div className='my-5'>
        <h1 className='text-3xl'>Headlines</h1>
      </div>
      <div className='bg-white p-3 rounded-md grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {newsList.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>
    </main>
  );
}
