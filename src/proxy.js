import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Detects the locale (cookie, then Accept-Language), redirects to the prefixed
// path when needed and sends hreflang alternate links.
export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next.js internals and files with an extension (images, PDF, robots.txt).
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
