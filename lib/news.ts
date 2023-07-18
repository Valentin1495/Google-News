export async function getHeadlineNews() {
  const res = await fetch(`${process.env.API_URL}/news?mkt=en-us`, {
    method: 'GET',
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.SUBSCRIPTION_KEY as string,
    },
  });

  if (!res.ok) {
    throw new Error('error');
  }

  return res.json();
}

export async function getNewsByCategory(category: string) {
  const res = await fetch(
    `${process.env.API_URL}/news?mkt=en-us&category=${category}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SUBSCRIPTION_KEY as string,
      },
    }
  );

  if (!res.ok) {
    throw new Error('error');
  }

  return res.json();
}

export async function getNewsResults(searchQuery: string) {
  const res = await fetch(
    `${process.env.API_URL}/news/search?mkt=en-us&q=${searchQuery}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SUBSCRIPTION_KEY as string,
      },
    }
  );

  if (!res.ok) {
    throw new Error('error');
  }

  return res.json();
}
