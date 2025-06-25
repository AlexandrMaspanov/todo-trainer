import React from 'react';
import NavItem from '../navitem/NavItem';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <NavItem to='/'>Главная</NavItem>
        <NavItem to='/profile'>Профиль</NavItem>
      </ul>
    </nav>
  );
}

export default Navbar;
