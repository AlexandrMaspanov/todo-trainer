import React from 'react';
import NavItem from '../navitem/NavItem';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <li><NavItem to='/'>Главная</NavItem></li>
        <li><NavItem to='/profile'>Профиль</NavItem></li>
      </ul>
    </nav>
  );
}

export default Navbar;
