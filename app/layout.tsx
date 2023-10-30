import SessionProvider from '@/providers/session-provider';
import QueryClientProvider from '@/providers/query-client-provider';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import Toast from '@/components/toast';

export const metadata: Metadata = {
  title: 'NYTimes',
  description:
    'Comprehensive up-to-date news coverage, aggregated from sources all over the world by New York Times.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className='bg-sky-50'>
        <Toast />
        <SessionProvider session={session}>
          <QueryClientProvider>{children}</QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
