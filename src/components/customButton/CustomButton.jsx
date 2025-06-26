import React from "react";
import styles from './CustomButton.module.css';

const CustomButton = ({ children, type, className, ariaLabel, ...props }) => {
    return (
        <button
            type={type}
            aria-label={ariaLabel}
            {...props}
            className={`${styles.button} ${className}`}
        >
            {children}
        </button>
    );
}

export default CustomButton;
