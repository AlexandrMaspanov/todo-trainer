import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCompleted } from '../../../store/todoSlice';
import { openSidebar } from '../../../store/sidebarSlice';
import CustomButton from '../../customButton/CustomButton';
import styles from './ActionButtons.module.css';

const ActionButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.todosActions}>
      <CustomButton onClick={() => dispatch(clearCompleted())}>Очистить выполненные</CustomButton>
      <CustomButton onClick={() => dispatch(openSidebar())}>+ Добавить задачу</CustomButton>
    </div>
  );
}

export default ActionButtons;
