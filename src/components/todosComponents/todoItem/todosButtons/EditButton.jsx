import React from 'react';
import CustomButton from '../../../customButton/CustomButton';

const EditButton = ({ className, onClick }) => {
    return (
        <CustomButton className={className} onClick={onClick} ariaLabel='Редактировать'>🖍</CustomButton>
    );
}

export default EditButton;
