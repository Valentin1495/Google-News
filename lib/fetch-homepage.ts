import { NextResponse } from 'next/server';

export async function fetchHomepage() {
  const res = await fetch(
    `${process.env.API_URL}/topstories/v2/home.json?api-key=${process.env.API_KEY}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
