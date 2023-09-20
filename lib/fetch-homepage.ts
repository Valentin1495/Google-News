export async function fetchHomepage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/topstories/v2/home.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await res.json();

  return data;
}
