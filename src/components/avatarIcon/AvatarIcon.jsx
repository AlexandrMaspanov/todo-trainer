import React from 'react';
import { useUser } from '../../context/UserContext';
import { FaUserCircle } from 'react-icons/fa';
import styles from './AvatarIcon.module.css';

const AvatarIcon = () => {
  const { currentUser } = useUser();
  const type = currentUser?.testResult?.type;
  const photo = currentUser?.photo;

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
