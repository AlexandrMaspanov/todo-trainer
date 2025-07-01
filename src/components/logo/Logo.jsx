import React from 'react';
import styles from './Logo.module.css';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="todo-trainer logo" className={styles.logoImg} />
    </div>
  );
};

export default Logo;
