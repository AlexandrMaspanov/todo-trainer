import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './UserPreview.module.css';

const UserPreview = ({ photo, name }) => {
  return (
    <div className={styles.userPreview}>
    {photo
      ? <img src={photo} alt={name} className={styles.avatar} />
      : <FaUserCircle className={styles.icon} />}
    <span>{name}</span>
  </div>
  );
}

export default UserPreview;
