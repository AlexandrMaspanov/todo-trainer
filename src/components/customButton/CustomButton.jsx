import React from "react";
import styles from './CustomButton.module.css';

const CustomButton = ({
    children,
    type = 'button',
    className = '',
    variant = 'primary',
    hint,
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
            {hint && <span className={styles.tooltip}>{hint}</span>}
        </div>
    );
}

export default CustomButton;
