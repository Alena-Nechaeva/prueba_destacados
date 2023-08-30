import React from 'react';
import styles from './layout.css';

interface ILayoutprops {
  children?: React.ReactNode;
}

export function Layout({children}: ILayoutprops) {
  return (
  <div className={styles.layout}>
    {children}
  </div>
  );
}
