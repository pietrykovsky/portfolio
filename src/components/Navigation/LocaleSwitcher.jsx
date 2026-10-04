"use client";

import { Nav } from 'react-bootstrap';
import { useLocale } from 'next-intl';
import { getPathname, usePathname } from '@/i18n/navigation';
import styles from './LocaleSwitcher.module.css';
import { HiOutlineGlobeAlt } from "react-icons/hi2";

const LocaleSwitcher = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();

  const changeLocale = (newLocale) => {
    if (newLocale !== currentLocale) {
      // Store the choice first so the proxy does not redirect back to the old locale.
      // A full page load on purpose: English pages are rewritten to /en/... internally, and
      // after a client-side switch the router keeps that internal URL, which makes the
      // prefetches of the English links fail with 404.
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; samesite=lax`;
      window.location.assign(getPathname({ href: pathname, locale: newLocale }));
    }
  };

  return (
    <Nav.Item className={styles.localeSwitcher}>
      <HiOutlineGlobeAlt className='m-2'/>
      <button
        className={`${styles.localeButton} ${currentLocale === 'en' ? styles.active : ''}`}
        onClick={() => changeLocale('en')}
        disabled={currentLocale === 'en'}
      >
        EN
      </button>
      <span className={styles.separator}>/</span>
      <button
        className={`${styles.localeButton} ${currentLocale === 'pl' ? styles.active : ''}`}
        onClick={() => changeLocale('pl')}
        disabled={currentLocale === 'pl'}
      >
        PL
      </button>
    </Nav.Item>
  );
};

export default LocaleSwitcher;
