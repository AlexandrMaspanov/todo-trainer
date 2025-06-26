import React from "react";
import styles from './CustomButton.module.css';

const CustomButton = ({ onClick, children, type = 'button', className = '', disabled = false }) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default CustomButton;
