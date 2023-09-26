import { NewspaperIcon } from '@/components/icons';
import { categories } from '@/components/navbar';
import NewsArticle from '@/components/news-article';
import { fetchSection } from '@/lib/fetch-section';
import addBlurredDataUrls from '@/lib/get-base64';
import { sortByNewest } from '@/lib/sort-by-newest';
import { notFound } from 'next/navigation';

type NewsProps = {
  params: { category: string };
};

export function generateMetadata({ params }: NewsProps) {
  const category = params.category;
  const modified = category[0].toUpperCase() + category.slice(1);

  return {
    title: 'Google News' + ' - ' + modified,
  };
}

export default async function NewsByCategory({ params }: NewsProps) {
  const category = params.category;
  const modified = category[0].toUpperCase() + category.slice(1);

  const newsData: NewsData = await fetchSection(category);
  const newsList = newsData.results;
  const modifiedNewsList = await addBlurredDataUrls(newsList);
  const sortedOne = sortByNewest(modifiedNewsList);

  const newCategories = categories.slice(1);

  if (!newCategories?.includes(category)) {
    notFound();
  }

  return (
    <main className='py-10 space-y-5'>
      <div className='flex items-center gap-x-2'>
        <NewspaperIcon className='w-8 h-8' />
        <h1 className='text-3xl font-medium'>{modified}</h1>
      </div>

      <div className='bg-white p-5 rounded-md shadow-md'>
        <section className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {sortedOne?.slice(0, 6).map((news, i) => (
            <NewsArticle key={news.url} {...news} idx={i} />
          ))}
        </section>
      </div>
    </main>
  );
}
