import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';
import { selectFilteredTodos } from '../../../store/selectors';
import styles from './TodoList.module.css';

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <ul className={styles.todoList}>
      {todos.length === 0 ? (
        <li>Нет задач</li>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))
      )}
    </ul>
  );
}

export default TodoList;
