import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

const AuthLayout = () => {
    return (
        <main className={`${styles.authLayout} fadeIn`}>
            <Outlet />
        </main>
    );
}

export default AuthLayout;
