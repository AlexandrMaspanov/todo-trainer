import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';
import { selectFilteredTodos } from '../../../store/selectors';
import { useTodosStorage } from '../../../hooks/useTodosStorage';
import styles from './TodoList.module.css';

const TodoList = () => {
  useTodosStorage();
  const todos = useSelector(selectFilteredTodos);

  return (
    <ul className={styles.todoList}>
      {todos.length === 0 ? (
        <li>Нет задач</li>
      ) : (
        <TransitionGroup component={null}>
          {todos.map(todo => {
            const nodeRef = React.createRef();

            return (
              <CSSTransition
                key={todo.id}
                timeout={300}
                classNames={{
                  enter: styles.enter,
                  enterActive: styles.enterActive,
                  exit: styles.exit,
                  exitActive: styles.exitActive,
                }}
                nodeRef={nodeRef}
              >
                <TodoItem ref={nodeRef} {...todo} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      )}
    </ul>
  );
}

export default TodoList;
