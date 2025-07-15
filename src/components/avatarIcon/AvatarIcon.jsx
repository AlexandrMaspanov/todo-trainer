import React from 'react';
import { useUser } from '../../context/UserContext';
import { FaUserCircle } from 'react-icons/fa';
import styles from './AvatarIcon.module.css';

const AvatarIcon = () => {
  const { currentUser } = useUser();
  const type = currentUser?.testResult?.type;
  const photo = currentUser?.photo;

  const roleMap = {
    planner: 'Планировщик',
    prioritizer: 'Приоритетчик',
    organizer: 'Организатор',
    visualizer: 'Визуализатор'
  };

  const roleLabel = type ? roleMap[type] : null;

  return (
    <div className={`${styles.wrapper} ${type && styles[type]}`}>
      {photo ? (
        <img src={photo} alt='Аватар' className={styles.avatar} />
      ) : (
        <FaUserCircle className={styles.placeholder} />
      )}
      {roleLabel && (
        <div className={`${styles.labelWrapper} ${type && styles[type]}`}>
          <span className={styles.label}>{roleLabel}</span>
        </div>
      )}
    </div>
  );
};

export default AvatarIcon;
