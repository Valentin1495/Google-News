import { NewspaperIcon } from '@/components/Icons';
import NewsCard from '@/components/NewsCard';
import { getNewsResults } from '@/lib/news';
import { mockNewsResults } from '@/mockData';

type searchParams = {
  q: string;
};

export default async function Search({
  searchParams,
}: {
  searchParams: searchParams;
}) {
  //   const newsResults = await getNewsResults(searchParams.q);
  const newsResults = mockNewsResults.value;
  const totalEstimatedMatches = mockNewsResults.totalEstimatedMatches;

  return (
    <main className='py-10 space-y-5'>
      <div className=''>
        <div className='flex items-center space-x-2'>
          <NewspaperIcon className='w-8 h-8' />
          <h1 className='text-3xl font-medium'>
            Results: {totalEstimatedMatches}
          </h1>
        </div>
      </div>
      <div className='bg-white p-5 rounded-md grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 shadow-md'>
        {newsResults.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>
    </main>
  );
}
