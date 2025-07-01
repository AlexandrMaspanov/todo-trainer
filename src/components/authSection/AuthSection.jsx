import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserId, getUserById, removeCurrentUserId } from '../../utils/storage';
import Tooltip from '../tooltip/Tooltip';
import CustomButton from '../customButton/CustomButton';
import styles from './AuthSection.module.css';
import { FiLogOut } from 'react-icons/fi';

const AuthSection = () => {
    const navigate = useNavigate();
    const userId = getCurrentUserId();
    const currentUser = userId ? getUserById(userId) : null;

    const handleLogout = () => {
        removeCurrentUserId();
        navigate('/login');
    };

    if (!currentUser) return null;

    const avatarContent = currentUser.photo ? (
        <Tooltip hint={currentUser.name} delay={200}>
            <img
                src={currentUser.photo}
                alt="Аватар"
                className={styles.avatar}
            />
        </Tooltip>
    ) : (
        <FaUserCircle className={styles.placeholderIcon} />
    );

    return (
        <div className={styles.authSection}>
            {avatarContent}
            <Tooltip hint='Выйти' delay={200}>
                <CustomButton
                    variant='icon'
                    className={styles.logoutBtn}
                    onClick={handleLogout}
                >
                    <FiLogOut />
                </CustomButton>
            </Tooltip>
        </div>
    );
}

export default AuthSection;
