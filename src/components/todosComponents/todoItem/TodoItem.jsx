import React from 'react';
import CustomButton from '../../customButton/CustomButton';
import styles from './TodoItem.module.css';

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
                className={styles.inputCheckbox}
            />
            <span className={styles.title}>{title}</span>
            <CustomButton className={styles.delete}>🗑</CustomButton>
        </li>
    );
}

export default TodoItem;
