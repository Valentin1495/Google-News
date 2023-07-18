import FollowBtn from '@/components/FollowBtn';
import { NewspaperIcon, StarIcon } from '@/components/Icons';
import NewsCard from '@/components/NewsCard';
import { getHeadlineNews, getNewsByCategory } from '@/lib/news';
import { mockNewsByCategory } from '@/mockData';

type NewsProps = {
  params: { category: string };
};

export function generateMetadata({ params }: NewsProps) {
  const category = params.category;

  return {
    title: 'Google News' + ' - ' + category,
  };
}

export default async function NewsByCategory({ params }: NewsProps) {
  const category = params.category;

  if (category === 'Home') {
    // const headlineNewsData: NewsData = await getHeadlineNews();
    const headlineNewsData: NewsData = mockNewsByCategory;
    const headlineNewsList = headlineNewsData.value;

    return (
      <main className='py-10 space-y-5'>
        <div className='flex items-center'>
          <div className='flex items-center space-x-2 flex-grow'>
            <NewspaperIcon className='w-8 h-8' />
            <h1 className='text-3xl font-medium'>Headlines</h1>
          </div>
          <FollowBtn />
        </div>
        <div className='bg-white p-5 rounded-md grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 shadow-md'>
          {headlineNewsList.map((news, idx) => (
            <NewsCard key={idx} {...news} />
          ))}
        </div>
      </main>
    );
  } else {
    // const newsByCategoryData: NewsData = await getNewsByCategory(category);
    const newsByCategoryData: NewsData = mockNewsByCategory;
    const newsByCategoryList = newsByCategoryData.value;

    return (
      <main className='py-10 space-y-5'>
        <div className='flex items-center'>
          <div className='flex items-center space-x-2 flex-grow'>
            <NewspaperIcon className='w-8 h-8' />
            <h1 className='text-3xl font-medium'>{category}</h1>
          </div>
          <FollowBtn />
        </div>
        <div className='bg-white p-5 rounded-md grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 shadow-md'>
          {newsByCategoryList.map((news, idx) => (
            <NewsCard key={idx} {...news} />
          ))}
        </div>
      </main>
    );
  }
}
