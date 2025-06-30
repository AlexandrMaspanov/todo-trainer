import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodoComplete, updateTodo, removeTodo } from '../../../store/todoSlice';
import { startEditing, stopEditing } from '../../../store/uiSlice';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import InputField from '../../inputField/InputField';
import CustomButton from '../../customButton/CustomButton';
import styles from './TodoItem.module.css';

const TodoItem = forwardRef((props, ref) => {
    const { id, title, completed, ...rest } = props;
    const dispatch = useDispatch();
    const editingId = useSelector(state => state.ui.editingId);
    const isEditing = editingId === id;

    const [tempTitle, setTempTitle] = useState(title);

    const localRef = useRef(null);

    useImperativeHandle(ref, () => localRef.current);

    useBodyScrollLock(editingId !== null);

    useEffect(() => {
        if (isEditing && localRef.current) {
            localRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [isEditing]);

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

    const handleToggle = () => {
        dispatch(toggleTodoComplete({ id }));
    }

    const handleDelete = () => {
        dispatch(removeTodo({ id }));
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

    return (
        <li
            ref={localRef}
            {...rest}
            className={`${styles.todoItem} ${isEditing ? styles.todoItemEditing : ''}`}
        >
            {isEditing ? (
                <>
                    <InputField
                        value={tempTitle}
                        onChange={setTempTitle}
                        onKeyDown={handleKeyDown}
                        placeholder='Введите название задачи'
                        className={styles.inputEdit}
                        autoFocus
                    />
                    <div className={styles.editButtons}>
                        <CustomButton
                            variant="minimal"
                            aria-label="Сохранить изменения"
                            onClick={handleSave}
                        >
                            ✔
                        </CustomButton>

                        <CustomButton
                            variant="minimal"
                            aria-label="Отменить редактирование"
                            onClick={handleCancel}
                        >
                            ✖
                        </CustomButton>
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
                        <CustomButton
                            variant="ghost"
                            aria-label="Редактировать задачу"
                            onClick={handleEdit}
                        >
                            ✎
                        </CustomButton>

                        <CustomButton
                            variant="ghost"
                            aria-label="Удалить задачу"
                            onClick={handleDelete}
                        >
                            🗑
                        </CustomButton>

                    </div>
                </>
            )}
        </li>
    );
});

export default TodoItem;
