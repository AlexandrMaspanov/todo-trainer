import React from 'react';
import CustomButton from '../../customButton/CustomButton';
import styles from './FilterButtons.module.css';

const FilterButtons = () => {
  return (
    <div className={styles.todosFilters}>
      <CustomButton>Все</CustomButton>
      <CustomButton>Активные</CustomButton>
      <CustomButton>Выполненные</CustomButton>
    </div>
  );
}

export default FilterButtons;
