import React from 'react';
import TodoFilter from '../../components/todosComponents/todoFilter/TodoFilter';
import ClearCompleteButton from '../../components/todosComponents/actionButtons/ClearCompleteButton';
import AddTaskButton from '../../components/todosComponents/actionButtons/AddTaskButton';
import TodoList from '../../components/todosComponents/todoList/TodoList';
import styles from './Todos.module.css';

const Todos = () => {
  return (
    <>
      <h1>Список задач</h1>
      <section className={styles.todosSection}>
        <div className={styles.todosControls}>
          <TodoFilter />
          <div className={styles.todosActions}>
            <ClearCompleteButton />
            <AddTaskButton />
          </div>
        </div>

        <TodoList />
      </section>
    </>
  );
}

export default Todos;
