import React from 'react';
import styles from './Overlay.module.css';

const Overlay = ({ isVisible, onClick }) => {
    if (!isVisible) return null;

    return (
        <div
            className={`${styles.overlay} ${styles.overlayVisible}`}
            onClick={onClick}
        />
    );
}

export default Overlay;
