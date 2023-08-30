import React from 'react';
import styles from './header.css';
import { LogoBlock } from './LogoBlock';
import { SortBlock } from './SortBlock';

export function Header() {
  return (
    <header className={styles.header}>
      <LogoBlock />
      <SortBlock />
    </header>
  );
}
