import React from 'react';
import { useDispatch } from 'react-redux';
import { openSidebar } from '../../../store/sidebarSlice';
import CustomButton from '../../customButton/CustomButton';

const AddTaskButton = () => {
    const dispatch = useDispatch();

    return (
        <CustomButton
            onClick={() => dispatch(openSidebar())}
            aria-label="Открыть форму добавления задачи"
        >
            + Добавить задачу
        </CustomButton>
    );
}

export default AddTaskButton;
