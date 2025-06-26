import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import CustomButton from '../customButton/CustomButton';
import InputField from '../inputField/InputField';
import styles from './AddTaskSidebar.module.css';

const AddTaskSidebar = ({ isSidebarOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = inputValue.trim();
    if (!title) return;

    dispatch(addTodo({title}));

    setInputValue('');
    onClose();
  }

  // Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Scroll lock
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => document.body.style.overflow = '';
  }, [isSidebarOpen]);

  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <h2>Новая задача</h2>
        <CustomButton className={styles.closeButton} onClick={onClose}>X</CustomButton>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder = 'Введите название задачи'
          required
        />
        <CustomButton type='submit' className={styles.submitButton}>Добавить</CustomButton>
      </form>
    </aside>
  );
}

export default AddTaskSidebar;
