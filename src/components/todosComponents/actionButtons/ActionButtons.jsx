import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, removeAllCompleted } from '../../../store/todoSlice';
import CustomButton from '../../customButton/CustomButton';
import styles from './ActionButtons.module.css';

const ActionButtons = () => {
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({title}));
    setTitle('');
  }

  return (
    <div className={styles.todosActions}>
      <CustomButton onClick={() => dispatch(removeAllCompleted())}>Очистить выполненные</CustomButton>
      <CustomButton onClick={addTask}>+ Добавить задачу</CustomButton>
    </div>
  );
}

export default ActionButtons;
