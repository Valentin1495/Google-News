import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { pathname } = new URL(req.url);
  const arr = pathname.split('/');
  const endpoint = arr[2];

  const res = await fetch(
    `${process.env.API_URL}/topstories/v2/${endpoint}.json?api-key=${process.env.API_KEY}`,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
