import React from "react";
import styles from './CustomButton.module.css';

const CustomButton = ({ onClick, children, type = 'text', className = '' }) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default CustomButton;
