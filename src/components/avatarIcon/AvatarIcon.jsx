import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './AvatarIcon.module.css';

const AvatarIcon = ({ photo, type }) => {
  return (
    <div className={`${styles.wrapper} ${type && styles[type]}`}>
      {photo ? (
        <img src={photo} alt='Аватар' className={styles.avatar} />
      ) : (
        <FaUserCircle className={styles.placeholder} />
      )}
    </div>
  );
};

export default AvatarIcon;
