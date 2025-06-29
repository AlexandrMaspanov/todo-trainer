import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import CustomButton from '../customButton/CustomButton';
import InputField from '../inputField/InputField';
import styles from './AddTaskSidebar.module.css';

const AddTaskSidebar = ({ isSidebarOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useBodyScrollLock(isSidebarOpen);

  useEffect(() => {
    if (isSidebarOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSidebarOpen]);

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

  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <h2>Новая задача</h2>
        <CustomButton variant='minimal' onClick={onClose}>X</CustomButton>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          ref={inputRef}
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
