import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../../../store/todoSlice';
import CustomButton from '../../customButton/CustomButton';
import styles from './TodoItem.module.css';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    return (
        <li className={styles.todoItem}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodoComplete({id}))}
                className={styles.inputCheckbox}
                readOnly
            />
            <span className={styles.title}>{title}</span>
            <CustomButton className={styles.delete} onClick={() => dispatch(removeTodo({id}))}>🗑</CustomButton>
        </li>
    );
}

export default TodoItem;
