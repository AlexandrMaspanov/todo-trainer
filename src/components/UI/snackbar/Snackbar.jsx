import React from 'react';
import styles from './Snackbar.module.css';

const Snackbar = ({ message, type = 'info' }) => {
    return (
        <div className={`${styles.snackbar} ${styles[type]}`}>
            {message}
        </div>
    );
};

export default Snackbar;
