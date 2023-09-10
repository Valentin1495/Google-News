import { NewspaperIcon } from '@/components/icons';
import { categories } from '@/components/navbar';
import NewsArticle from '@/components/news-article';
import { notFound } from 'next/navigation';

type NewsProps = {
  params: { category: string };
  searchParams: { page: number };
};

export function generateMetadata({ params }: NewsProps) {
  const category = params.category;
  const modified = category[0].toUpperCase() + category.slice(1);

  return {
    title: 'Google News' + ' - ' + modified,
  };
}
export const revalidate = 0;
export default async function NewsByCategory({
  params,
  searchParams,
}: NewsProps) {
  const category = params.category;
  const pageParams = searchParams.page;
  const modified = category[0].toUpperCase() + category.slice(1);

  const res = await fetch(`https://news.noahhan.vercel.app/api/${category}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const newsData: NewsData = await res.json();
  const newsList = newsData.results;
  const newCategories = categories.slice(1);

  if (!newCategories?.includes(category) || pageParams > 5) {
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
          {newsList?.map((news) => (
            <NewsArticle key={news.url} {...news} />
          ))}
        </section>
      </div>
    </main>
  );
}
