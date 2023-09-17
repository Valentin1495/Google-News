import { getPlaiceholder } from 'plaiceholder';

async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export default async function addBlurredDataUrls(
  newsList: News[]
): Promise<News[]> {
  // Make all requests at once instead of awaiting each one - avoiding a waterfall
  const base64Promises = newsList.map((news) =>
    getBase64(news.multimedia[1].url)
  );

  // Resolve all requests in order
  const base64Results = (await Promise.all(base64Promises)) as string[];

  const modifiedNewsList: News[] = newsList.map((news, i) => {
    news.multimedia[1].blurredDataUrl = base64Results[i];
    return news;
  });

  return modifiedNewsList;
}
