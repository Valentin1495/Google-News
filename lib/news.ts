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

export async function getNewsByCategories(category: string) {
  const res = await fetch(
    `${process.env.API_URL}/news?mkt=en-us&category=${category}`,
    {
      method: 'GET',
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
