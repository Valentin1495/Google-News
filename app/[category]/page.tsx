import { NewspaperIcon } from '@/components/Icons';
import { categories } from '@/components/Navbar';
import NewsArticle from '@/components/NewsArticle';
import { getNewsByCategory } from '@/lib/news';
import { mockNewsByCategory } from '@/mockData';
import { notFound } from 'next/navigation';

type NewsProps = {
  params: { category: string };
};

export function generateMetadata({ params }: NewsProps) {
  const category = params.category;
  const modified = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: 'Google News' + ' - ' + modified,
  };
}

export default async function NewsByCategory({ params }: NewsProps) {
  const category = params.category;
  const modified = category.charAt(0).toUpperCase() + category.slice(1);

  // const newsByCategoryData = await getNewsByCategory(category);
  const newsByCategoryData: NewsData = mockNewsByCategory;
  const newsByCategoryList = newsByCategoryData.value;

  if (!categories.includes(category)) return notFound();

  return (
    <main className='py-10 space-y-5'>
      <div className='flex items-center gap-x-2'>
        <NewspaperIcon className='w-8 h-8' />
        <h1 className='text-3xl font-medium'>{modified}</h1>
      </div>

      <div className='bg-white p-5 rounded-md flex flex-col md:flex-row md:gap-x-4 shadow-md h-full'>
        <div className='flex flex-col gap-y-4 md:w-1/2'>
          {newsByCategoryList.slice(0, 6).map((news, idx) => (
            <NewsArticle key={idx} {...news} className='article-by-category' />
          ))}
        </div>

        <div className='bg-neutral-200 h-[1.5px] md:h-auto md:w-[2px] mb-4 md:mb-0'></div>

        <div className='flex flex-col gap-y-4 md:w-1/2'>
          {newsByCategoryList.slice(6, 12).map((news, idx) => (
            <NewsArticle key={idx} {...news} className='article-by-category' />
          ))}
        </div>
      </div>
    </main>
  );
}
