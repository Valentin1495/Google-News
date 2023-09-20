'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import LoadingSkeleton from './loading-skeleton';
import { FileSearchIcon } from '@/components/icons';
import Loader from '@/components/loader';
import NewsArticleByQuery from '@/components/news-article-by-query';
import { fetchSearchResults } from '@/lib/fetch-search-results';

export default function SearchResults({ query }: { query: string }) {
  const { status, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['search', query],
    queryFn: async ({ pageParam = 0 }) => {
      const data = await fetchSearchResults(query, pageParam);
      return data;
    },
    getNextPageParam: (lastPage) => {
      const meta = lastPage.response?.meta;
      const nextPageIndex = meta?.offset / 10 + 1;
      const pages = Math.ceil(meta?.hits / 10);

      return nextPageIndex < pages && nextPageIndex <= 100
        ? nextPageIndex
        : undefined;
    },
  });
  const totalNumber = data?.pages[0].response?.meta.hits;

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      {status === 'loading' ? (
        <LoadingSkeleton />
      ) : status === 'error' ? (
        <h1 className='text-red-500 font-bold text-xl text-center'>
          Failed to fetch search results 😭
        </h1>
      ) : (
        <div className='space-y-5'>
          <div className='flex items-center gap-x-2'>
            <FileSearchIcon className='w-[26px] h-[26px]' />
            <h4 className='text-neutral-500 w-[280px] truncate sm:w-auto'>
              {totalNumber ? new Intl.NumberFormat().format(totalNumber) : 0}{' '}
              results
            </h4>
          </div>

          {totalNumber ? (
            <>
              <div className='space-y-3'>
                {data.pages.map((news, i) => (
                  <div
                    key={i}
                    className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'
                  >
                    {news.response?.docs.map((article: NewsByQuery) => (
                      <NewsArticleByQuery key={article._id} {...article} />
                    ))}
                  </div>
                ))}
              </div>

              <div ref={ref}></div>

              {isFetchingNextPage && (
                <div className='flex justify-center'>
                  <Loader />
                </div>
              )}
            </>
          ) : (
            <div className='text-lg space-y-3'>
              <p>Your search did not match any documents.</p>

              <h3>Suggestions:</h3>

              <ul>
                <li>• Make sure all words are spelled correctly.</li>
                <li>• Try different keywords.</li>
                <li>• Try more general keywords</li>
                <li>• Try fewer keywords.</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
