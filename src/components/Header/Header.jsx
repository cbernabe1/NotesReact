import React from 'react'
import styles from './Header.module.css';
export const Header = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Notes</h1>
    </nav>
  )
}
