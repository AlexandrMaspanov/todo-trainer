import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../../../store/todoSlice';
import Tooltip from '../../tooltip/Tooltip';
import CustomButton from '../../customButton/CustomButton';

const ClearCompleteButton = memo(() => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const hasCompleted = todos.some(todo => todo.completed);

    return (
        <Tooltip hint={!hasCompleted ? 'Нет завершённых задач' : ''} delay={200}>
            <CustomButton
                disabled={!hasCompleted}
                onClick={() => dispatch(clearCompleted())}
            >
                Очистить выполненные
            </CustomButton>
        </Tooltip>
    );
});

export default ClearCompleteButton;
