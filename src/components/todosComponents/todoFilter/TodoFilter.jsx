import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TodoFilter.module.css';
import { setFilter } from '../../../store/filterSlice';

const TodoFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="filter">Фильтр: </label>
      <select
        id='filter'
        alue={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className={styles.todosSelect}
      >
        <option value="all">Все</option>
        <option value="active">Активные</option>
        <option value="completed">Выполненные</option>
      </select>
    </div>
  );
}

export default TodoFilter;
