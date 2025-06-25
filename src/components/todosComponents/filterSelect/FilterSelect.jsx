import React from 'react';
import CustomButton from '../../customButton/CustomButton';
import styles from './FilterSelect.module.css';

const FilterSelect = () => {
  return (
    <select className={styles.todosSelect}>
      <option value="all">Все</option>
      <option value="active">Активные</option>
      <option value="completed">Выполненные</option>
    </select>
  );
}

export default FilterSelect;
