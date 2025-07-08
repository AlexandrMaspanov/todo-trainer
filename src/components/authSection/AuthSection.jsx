import React from 'react';
import { useUser } from '../../context/UserContext';
import ProfileDropdown from '../profileMenu/ProfileDropdown';
import styles from './AuthSection.module.css';

const AuthSection = () => {
    const { currentUser } = useUser();

    if (!currentUser) return null;

    return (
        <div className={styles.authSection}>
            <ProfileDropdown />
        </div>
    );
}

export default AuthSection;
