import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { PREVIEW_SIZES } from '../../constants';
import styles from './UserPreview.module.css';

const UserPreview = ({ photo, name, size = PREVIEW_SIZES.MEDIUM }) => {
  const sizeClass = styles[size] || styles[PREVIEW_SIZES.MEDIUM];

  return (
    <div className={`${styles.userPreview} ${sizeClass}`}>
      {photo
        ? <img src={photo} alt={name} className={styles.avatar} />
        : <FaUserCircle className={styles.icon} />}
      <span>{name}</span>
    </div>
  );
}

export default UserPreview;
