'use server';

import {cookies} from 'next/headers';
import {headers} from 'next/headers';

const COOKIE_NAME = 'PAGE_LOCALE';

const LOCALES = ['en', 'pl'];
const DEFAULT_LOCALE = 'en';

export async function getUserLocale() {
  // Check for cookie first
  const cookieLocale = cookies().get(COOKIE_NAME)?.value;
  if (cookieLocale && LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }

  // If no cookie, try to detect region from Accept-Language header
  const acceptLanguage = headers().get('Accept-Language');
  if (acceptLanguage) {
    const detectedLocale = acceptLanguage.split(',')[0].split('-')[0];
    if (LOCALES.includes(detectedLocale)) {
      return detectedLocale;
    }
  }

  return DEFAULT_LOCALE;
}

export async function setUserLocale(locale) {
  if (!LOCALES.includes(locale)) {
    return false;
  }
  cookies().set(COOKIE_NAME, locale);
  return true;
}