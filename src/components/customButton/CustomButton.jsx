import React from "react";
import styles from './CustomButton.module.css';

const CustomButton = ({
    children,
    type = 'button',
    className = '',
    variant = 'primary',
    fullWidth = false,
    ariaLabel,
    ...props
}) => {
    const variantClass = styles[variant] || "";

    return (
        <div className={`${styles.buttonWrapper} ${fullWidth ? styles.fullWidth : ''}`}>
            <button
                type={type}
                aria-label={ariaLabel}
                className={`${styles.button} ${variantClass} ${className}`.trim()}
                {...props}
            >
                {children}
            </button>
        </div>
    );
}

export default CustomButton;
