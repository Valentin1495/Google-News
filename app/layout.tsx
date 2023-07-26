import SessionProvider from '@/Providers/SessionProvider';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/authOptions';

export const metadata: Metadata = {
  title: 'Google News',
  description:
    'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en' className='bg-sky-50'>
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
