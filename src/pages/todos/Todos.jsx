import React from 'react';
import FilterSelect from '../../components/todosComponents/filterSelect/FilterSelect';
import ActionButtons from '../../components/todosComponents/actionButtons/ActionButtons';
import TodoList from '../../components/todosComponents/todoList/TodoList';
import styles from './Todos.module.css';

const Todos = () => {
  return (
    <>
      <h1>Список задач</h1>
      <section className={styles.todosSection}>
        <div className={styles.todosControls}>
          <FilterSelect />
          <ActionButtons />
        </div>

        <TodoList />
      </section>
    </>
  );
}

export default Todos;
