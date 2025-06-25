import React from 'react';
import styles from './TodoItem.module.css';
import CustomButton from '../../customButton/CustomButton';

const TodoItem = ({ id, title, completed }) => {
    const toggleTodoComplete = (todoId) => {

    }

    return (
        <li className={styles.todoItem}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodoComplete(id)}
                readOnly
                className={styles.check}
            />
            <span>{title}</span>
            <CustomButton className={styles.delete}>Удалить</CustomButton>
        </li>
    );
}

export default TodoItem;
