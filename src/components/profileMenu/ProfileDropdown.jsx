import React, { useState, useRef, useEffect } from 'react';
import AvatarIcon from '../avatarIcon/AvatarIcon';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserId, getUserById, removeCurrentUserId } from '../../utils/storage';
import CustomButton from '../customButton/CustomButton';
import styles from './ProfileDropdown.module.css';

const ProfileDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const navigate = useNavigate();
    const userId = getCurrentUserId();
    const currentUser = userId ? getUserById(userId) : null;

    const handleReg = () => {
        navigate('/register', { state: { from: location.pathname } })
    }

    const handleLogout = () => {
        removeCurrentUserId();
        navigate('/login');
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!currentUser) return null;

    return (
        <div ref={dropdownRef}>
            <CustomButton
                variant='icon'
                aria-label='Профиль'
                onClick={() => setOpen(prev => !prev)}
            >
                <AvatarIcon />
            </CustomButton>

            {open && (
                <div className={`${styles.dropdown} ${styles.dropdownOpen}`}>
                    <p className={styles.name}>{currentUser.name}</p>
                    <CustomButton
                        variant='icon'
                        aria-label='Регистрация'
                        className={styles.dropdownItem}
                        onClick={handleReg}
                    >
                        <span>Регистрация</span>
                    </CustomButton>
                    <CustomButton
                        variant='icon'
                        aria-label='Выйти'
                        className={`${styles.dropdownItem} ${styles.logoutItem}`}
                        onClick={handleLogout}
                    >
                        <FiLogOut />
                        <span>Выйти</span>
                    </CustomButton>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
