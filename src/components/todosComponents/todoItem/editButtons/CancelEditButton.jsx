import React from 'react';
import CustomButton from '../../../customButton/CustomButton';

const CancelEditButton = ({ className, onClick }) => {
    return (
        <CustomButton className={className} onClick={onClick} ariaLabel='Отменить'>❌</CustomButton>
    );
}

export default CancelEditButton;
