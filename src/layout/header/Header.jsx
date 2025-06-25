import React from 'react';
import Logo from '../../components/logo/Logo';
import Navbar from '../../components/navbar/Navbar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
