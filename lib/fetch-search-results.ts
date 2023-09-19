export async function fetchSearchResults(query: string, pageParam: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search/v2/articlesearch.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}&q=${query}&sort=newest&page=${pageParam}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await res.json();

  return data;
}
