import pageToOffset from '@/lib/page-to-offset';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { pathname } = new URL(req.url);
  const category = pathname.split('/')[1];

  const res = await fetch(
    `${process.env.BING_API_URL}/news?mkt=en-us&category=${category}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SUBSCRIPTION_KEY as string,
      },
      next: { revalidate: 0 },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
