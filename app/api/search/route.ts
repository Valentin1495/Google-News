import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  const pageParam = searchParams.get('page');

  const res = await fetch(
    `${process.env.API_URL}/search/v2/articlesearch.json?api-key=${process.env.API_KEY}&q=${query}&sort=newest&page=${pageParam}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
