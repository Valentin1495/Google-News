import SearchResults from '@/components/search-results';

export function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = searchParams.query;

  return {
    title: query + ' - ' + 'Google News Search',
  };
}

export const revalidate = 60;

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
