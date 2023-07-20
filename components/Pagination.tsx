import Link from 'next/link';

type PaginationProps = {
  pages: number;
};

export default function Pagination({ pages }: PaginationProps) {
  return (
    <div>
      {Array.from(Array(pages).keys()).map((el) => (
        <Link href={`${el + 1}`}>{el + 1}</Link>
      ))}
    </div>
  );
}
