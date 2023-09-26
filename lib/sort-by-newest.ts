export const sortByNewest = (newsList: News[]) => {
  const sortedOne = newsList.sort((a, b) => {
    const timestampA = new Date(a.published_date);
    const timestampB = new Date(b.published_date);

    if (timestampA < timestampB) return 1;
    if (timestampA > timestampB) return -1;
    return 0;
  });

  return sortedOne;
};
