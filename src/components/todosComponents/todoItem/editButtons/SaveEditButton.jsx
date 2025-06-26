import React from 'react';
import CustomButton from '../../../customButton/CustomButton';

const SaveEditButton = ({ className, onClick }) => {
    return (
        <CustomButton className={className} onClick={onClick} ariaLabel='Сохранить'>✔</CustomButton>
    );
}

export default SaveEditButton;
