import React from 'react';
import styles from './EmptyState.module.css';

const EmptyState = ({ message, hint }) => {
    return (
        <div className={styles.emptyState}>
            <p className={styles.title}>{message}</p>
            <p className={styles.hint}>{hint}</p>
        </div>
    );
}

export default EmptyState;
