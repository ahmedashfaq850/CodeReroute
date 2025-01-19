'use client';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo - Positioned absolutely to the left */}
        <Link
          href="/"
          className={styles.logo}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={styles.logoIcon}
          >
            <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </Link>

        {/* Centered Navigation Links */}
        <div className={styles.navLinks}>
          <Link
            href="/tech-company"
            className={styles.link}
          >
            TECH COMPANY
          </Link>
          <div className={styles.middleLink}>
            <Link
              href="/mappetizer"
              className={styles.link}
            >
              MAPPETIZER
            </Link>
          </div>
          <Link
            href="/work-here"
            className={`${styles.link} ${styles.rightAlign}`}
          >
            WORK HERE
          </Link>
        </div>
      </div>
    </nav>
  );
}
