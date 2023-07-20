import { NewspaperIcon } from '@/components/Icons';
import NewsCard from '@/components/NewsCard';
import Pagination from '@/components/Pagination';
import { getNewsResults } from '@/lib/news';
import { mockNewsResults } from '@/mockData';

type searchParams = {
  q: string;
};

export function generateMetadata() {
  return {
    title: 'Google News' + ' - ' + 'Search',
  };
}

export default async function SearchNews({
  searchParams,
}: {
  searchParams: searchParams;
}) {
  //   const newsResults = await getNewsResults(searchParams.q);

  const { value: newsResults, totalEstimatedMatches } = mockNewsResults;
  const total = 100;

  return (
    <main className='py-10 space-y-5'>
      <div>
        <div className='flex items-center space-x-2'>
          <NewspaperIcon className='w-8 h-8' />
          <h1 className='text-3xl font-medium'>Results: {total}</h1>
        </div>
      </div>
      <div className='bg-white p-5 rounded-md grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 shadow-md'>
        {newsResults.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
        <Pagination pages={Math.ceil((total as number) / 12)} />
      </div>
    </main>
  );
}
