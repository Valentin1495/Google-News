import SearchResults from '@/components/search-results';

export function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = searchParams.query;

  return {
    title: query + ' - ' + 'NYTimes Search',
  };
}

export default function SearchNews({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = searchParams.query;

  return (
    <main className='py-10'>
      <SearchResults query={query} />
    </main>
  );
}
