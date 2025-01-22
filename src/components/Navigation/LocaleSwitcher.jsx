"use client";

import { Nav } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { getUserLocale, setUserLocale } from '@/services/locale';
import styles from './LocaleSwitcher.module.css';
import { HiOutlineGlobeAlt } from "react-icons/hi2";

const LocaleSwitcher = () => {
  const [currentLocale, setCurrentLocale] = useState(null);

  useEffect(() => {
    const fetchLocale = async () => {
      const locale = await getUserLocale();
      setCurrentLocale(locale);
    };
    fetchLocale();
  }, []);

  const changeLocale = async (newLocale) => {
    if (newLocale !== currentLocale) {
      await setUserLocale(newLocale);
      setCurrentLocale(newLocale);
      window.location.reload();
    }
  };

  if (currentLocale === null) {
    return null;
  }

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