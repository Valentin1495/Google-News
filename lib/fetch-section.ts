export async function fetchSection(category: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/topstories/v2/${category}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await res.json();

  return data;
}
