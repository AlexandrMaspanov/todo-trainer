import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Logo from '../../components/logo/Logo';
import AuthSection from '../../components/authSection/AuthSection';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} fadeIn`}>
      <div className={styles.headerContainer}>

        <div className={styles.left}>
          <Navbar />
        </div>

        <div className={styles.center}>
          <Logo />
        </div>

        <div className={styles.right}>
          <AuthSection />
        </div>

      </div>
    </header>
  );
}

export default Header;
