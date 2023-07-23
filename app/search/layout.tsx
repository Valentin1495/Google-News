import '@/app/globals.css';
import Providers from '@/providers';

export default function NewsSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
