"use client";

import { Nav } from 'react-bootstrap';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import styles from './LocaleSwitcher.module.css';
import { HiOutlineGlobeAlt } from "react-icons/hi2";

const LocaleSwitcher = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale) => {
    if (newLocale !== currentLocale) {
      // Same page under the other locale's URL, e.g. /about <-> /pl/about.
      router.replace(pathname, { locale: newLocale });
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
