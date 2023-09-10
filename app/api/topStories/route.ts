import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    `${process.env.API_URL}/topstories/v2/home.json?api-key=${process.env.API_KEY}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}
