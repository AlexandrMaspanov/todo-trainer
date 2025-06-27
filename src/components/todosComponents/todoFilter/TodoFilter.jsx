import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../store/filterSlice';
import CustomSelect from '../../customSelect/CustomSelect';
import styles from './TodoFilter.module.css';

const options = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' },
];

const TodoFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.todosFilter}>
      <label htmlFor="filter">Фильтр: </label>
      <CustomSelect
        id='filter'
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        options={options}
        placeholder='Фильтр задач'
      />
    </div>
  );
}

export default TodoFilter;
