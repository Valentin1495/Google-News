import { NextResponse } from 'next/server';

export async function fetchSection(category: string) {
  const res = await fetch(
    `${process.env.API_URL}/topstories/v2/${category}.json?api-key=${process.env.API_KEY}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
