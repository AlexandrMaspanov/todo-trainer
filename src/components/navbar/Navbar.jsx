import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import NavItem from '../navitem/NavItem';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.burger}
        onClick={() => setOpen(prev => !prev)}
        aria-label='Toggle navigation'
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} /> }
      </button>

      <ul
        ref={menuRef}
        className={`${styles.navbarLinks} ${open ? styles.open : ''}`}
      >
        <li onClick={() => setOpen(prev => !prev)}><NavItem to='/'>Главная</NavItem></li>
        <li onClick={() => setOpen(prev => !prev)}><NavItem to='/profile'>Профиль</NavItem></li>
        <li onClick={() => setOpen(prev => !prev)}><NavItem to='/test'>Тест</NavItem></li>
      </ul>
    </nav>
  );
}

export default Navbar;
