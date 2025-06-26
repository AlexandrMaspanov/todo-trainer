import React, { forwardRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodoComplete, updateTodo, removeTodo } from '../../../store/todoSlice';
import { startEditing, stopEditing } from '../../../store/uiSlice';
import InputField from '../../inputField/InputField';
import SaveEditButton from './editButtons/SaveEditButton';
import CancelEditButton from './editButtons/CancelEditButton';
import EditButton from './todosButtons/EditButton';
import DeleteButton from './todosButtons/DeleteButton';
import styles from './TodoItem.module.css';

const TodoItem = forwardRef((props, ref) => {
    const { id, title, completed, ...rest } = props;
    const dispatch = useDispatch();
    const editingId = useSelector(state => state.ui.editingId);
    const isEditing = editingId === id;

    const [tempTitle, setTempTitle] = useState(title);

    useEffect(() => {
        if (!isEditing) setTempTitle(title);
    }, [isEditing, title]);

    const handleEdit = () => {
        dispatch(startEditing({ id }));
    }

    const handleCancel = () => {
        dispatch(stopEditing());
    }

    const handleSave = () => {
        const newTitle = tempTitle.trim();
        if (newTitle && newTitle !== title) {
            dispatch(updateTodo({ id, title: newTitle }));
        }
        dispatch(stopEditing());
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            handleCancel();
        }
    }

    const handleToggle = () => {
        dispatch(toggleTodoComplete({ id }));
    }

    const handleDelete = () => {
        dispatch(removeTodo({ id }));
    }

    return (
        <li
            ref={ref}
            {...rest}
            className={`${styles.todoItem} ${isEditing ? styles.todoItemEditing : ''}`}
        >
            {isEditing ? (
                <>
                    <InputField
                        value={tempTitle}
                        onChange={(e) => setTempTitle(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder='Введите название задачи'
                        className={styles.inputEdit}
                        autoFocus
                    />
                    <div className={styles.editButtons}>
                        <SaveEditButton className={styles.saveEditButton} onClick={handleSave} />
                        <CancelEditButton className={styles.cancelEditButton} onClick={handleCancel} />
                    </div>
                </>
            ) : (
                <>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={handleToggle}
                        className={styles.inputCheckbox}
                        readOnly
                    />
                    <span className={styles.title}>{title}</span>
                    <div className={styles.todosButtons}>
                        <EditButton className={styles.editButton} onClick={handleEdit} />
                        <DeleteButton className={styles.deleteButton} onClick={handleDelete} />
                    </div>
                </>
            )
            }
        </li>
    );
});

export default TodoItem;
