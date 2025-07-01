import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../customButton/CustomButton';
import { purgeCurrentUserData } from '../../../utils/storage';
import styles from './DeleteProfileButton.module.css';


const DeleteProfileButton = () => {
    const navigate = useNavigate();

    const handleDeleteProfile = () => {
        const confirmed = window.confirm('Вы точно хотите удалить профиль?');
        if (!confirmed) return;

        purgeCurrentUserData();
        navigate('/login');
    }

    return (
        <CustomButton
            variant='outline'
            className={styles.deleteButton}
            onClick={handleDeleteProfile}
        >
            Удалить профиль
        </CustomButton>
    );
}

export default DeleteProfileButton;
