import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Paths that require authentication
const protectedPaths = ['/', '/dashboard'];

// Paths that should redirect to dashboard if authenticated
const authPaths = ['/login'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth-token')?.value;

  // Check if user is trying to access protected paths without authentication
  if (protectedPaths.includes(pathname) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check if authenticated user is trying to access auth pages
  if (authPaths.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};