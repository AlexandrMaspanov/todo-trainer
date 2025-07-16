import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} fadeIn`}>
      <p>&copy; {new Date().getFullYear()} Todo Trainer</p>
    </footer>
  );
}

export default Footer;
