import React from 'react';
import CustomButton from '../../customButton/CustomButton';
import styles from './ActionButtons.module.css';

const ActionButtons = () => {
  return (
    <div className={styles.todosActions}>
      <CustomButton>Очистить выполненные</CustomButton>
      <CustomButton>Добавить задачу</CustomButton>
    </div>
  );
}

export default ActionButtons;
