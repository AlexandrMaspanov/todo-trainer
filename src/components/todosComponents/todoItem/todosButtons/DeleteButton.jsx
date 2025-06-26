import React from 'react';
import CustomButton from '../../../customButton/CustomButton';

const DeleteButton = ({ className, onClick }) => {
    return (
        <CustomButton className={className} onClick={onClick} ariaLabel='Удалить'>🗑</CustomButton>
    );
}

export default DeleteButton;
