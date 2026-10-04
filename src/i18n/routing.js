import { defineRouting } from 'next-intl/routing';

// English stays on the bare paths (/about), Polish gets a prefix (/pl/about),
// so both versions have their own URLs for search engines.
export const routing = defineRouting({
  locales: ['en', 'pl'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // hreflang alternates live in public/sitemap.xml with absolute https URLs; the middleware
  // version would build them from the proxied request and could end up with http://.
  alternateLinks: false,
});
