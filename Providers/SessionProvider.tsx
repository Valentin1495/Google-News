'use client';

import { Session } from 'next-auth';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type SessionProviderProps = {
  children: ReactNode;
  session: Session | null;
};

export default function SessionProvider({
  children,
  session,
}: SessionProviderProps) {
  return <AuthProvider session={session}>{children}</AuthProvider>;
}
