import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../../../store/todoSlice';
import CustomButton from '../../customButton/CustomButton';

const ClearCompleteButton = memo(() => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const hasCompleted = todos.some(todo => todo.completed);

    return (
        <CustomButton
            disabled={!hasCompleted}
            hint={!hasCompleted ? 'Нет завершённых задач' : ''}
            onClick={() => dispatch(clearCompleted())}
        >
            Очистить выполненные
        </CustomButton>
    );
});

export default ClearCompleteButton;
