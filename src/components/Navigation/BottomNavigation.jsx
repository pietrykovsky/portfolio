"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import styles from './BottomNavigation.module.css';

const NavButton = ({ direction, page, onHover, onLeave }) => (
  <Link href={page?.path || '#'} passHref>
    <button
      className={`${styles.navButton} ${styles[`${direction}Button`]}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      disabled={!page}
    >
      {direction === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  </Link>
);

const BottomNavigation = () => {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [hoverDirection, setHoverDirection] = useState(null);

  const pages = [
    { path: '/', name: t('home') },
    { path: '/about', name: t('about') },
    { path: '/projects', name: t('projects') },
    { path: '/resume', name: t('resume') },
    { path: '/contact', name: t('contact') }
  ];

  const currentPageIndex = pages.findIndex(page => page.path === pathname);
  const prevPage = pages[(currentPageIndex - 1 + pages.length) % pages.length];
  const nextPage = pages[(currentPageIndex + 1) % pages.length];

  return (
    <div className={styles.bottomNavigation}>
      <NavButton 
        direction="prev" 
        page={prevPage} 
        onHover={() => setHoverDirection('prev')} 
        onLeave={() => setHoverDirection(null)} 
      />
      <div className={styles.navText}>
        {hoverDirection && (
          <span className={styles.fadeIn}>
            {hoverDirection === 'prev' ? prevPage.name : nextPage.name}
          </span>
        )}
      </div>
      <NavButton 
        direction="next" 
        page={nextPage} 
        onHover={() => setHoverDirection('next')} 
        onLeave={() => setHoverDirection(null)} 
      />
    </div>
  );
};

export default BottomNavigation;