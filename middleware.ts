import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const nextUrl = request.nextUrl;

  if (Number(nextUrl.searchParams.get('page')) > 5)
    return NextResponse.redirect(new URL('/', request.nextUrl));
}

export const config = {
  matcher: [
    '/world/:path*',
    '/business/:path*',
    '/entertainment/:path*',
    '/politics/:path*',
    '/technology/:path*',
    '/science/:path*',
    '/sports/:path*',
  ],
};
