import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Linting runs standalone via "npm run lint" (ESLint 9 flat config).
  // Next 14's built-in runner still passes ESLint 8 options and errors out.
  eslint: { ignoreDuringBuilds: true },
};

export default withNextIntl(nextConfig);
