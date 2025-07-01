import React from 'react';
import Tooltip from '../tooltip/Tooltip';
import styles from './EmptyState.module.css';

const EmptyState = ({ message, hint }) => {
    return (
        <div className={styles.emptyState}>
            <div className={styles.title}>
                {message}
                {hint && (
                    <Tooltip hint={hint} delay={200}>
                        <span className={styles.hintTarget} tabIndex={0}>?</span>
                    </Tooltip>
                )}
            </div>
        </div>
    );
}

export default EmptyState;
