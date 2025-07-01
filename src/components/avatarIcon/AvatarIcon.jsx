import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './AvatarIcon.module.css';

const AvatarIcon = ({ photo }) => {
  return photo ? (
      <img src={photo} alt='Аватар' className={styles.avatar} />
  ) : (
    <FaUserCircle className={styles.placeholder} />
  );
};

export default AvatarIcon;
