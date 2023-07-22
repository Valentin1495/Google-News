import SearchResults from '@/components/SearchResults';

export function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const modifiedQuery = searchParams.q.replace(/\s+/g, ' ');

  return {
    title: modifiedQuery + ' - ' + 'Google News Search',
  };
}
export default function SearchNews({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const modifiedQuery = searchParams.q.replace(/\s+/g, ' ');

  return (
    <main className='py-10'>
      <SearchResults modifiedQuery={modifiedQuery} />
    </main>
  );
}
