import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../todoItem/TodoItem';

const TodoList = () => {
  const todos = [
    { id: 1, title: 'Learn JS', completed: true },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Learn Redux', completed: false },
  ];

  return (
    <ul className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
