import React from 'react';
import { getCurrentUserId, getUserById } from '../../utils/storage';
import ProfileDropdown from '../profileMenu/ProfileDropdown';
import styles from './AuthSection.module.css';

const AuthSection = () => {
    const userId = getCurrentUserId();
    const currentUser = userId ? getUserById(userId) : null;

    if (!currentUser) return null;

    return (
        <div className={styles.authSection}>
            <ProfileDropdown />
        </div>
    );
}

export default AuthSection;
