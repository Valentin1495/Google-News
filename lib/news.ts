export async function getHeadlineNews(): Promise<NewsData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BING_API_URL}/news?mkt=en-US&count=24`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env
          .NEXT_PUBLIC_SUBSCRIPTION_KEY as string,
      },
    }
  );

  if (!res.ok) {
    throw new Error('error');
  }

  return res.json();
}

export async function getNewsByCategory(
  category: string,
  offset: number
): Promise<NewsData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BING_API_URL}/news?mkt=en-US&category=${category}&count=24&offset=${offset}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env
          .NEXT_PUBLIC_SUBSCRIPTION_KEY as string,
      },
    }
  );

  if (!res.ok) {
    throw new Error('error');
  }

  return res.json();
}

export async function getNewsResults(searchQuery: string, pageParam: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BING_API_URL}/news/search?mkt=en-US&q=${searchQuery}&count=24&offset=${pageParam}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env
          .NEXT_PUBLIC_SUBSCRIPTION_KEY as string,
      },
    }
  );

  if (!res.ok) {
    throw new Error('error');
  }

  return res.json();
}
