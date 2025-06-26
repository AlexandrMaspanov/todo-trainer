import React from "react";
import styles from './CustomButton.module.css';

const CustomButton = ({
    children,
    type = 'button',
    className = '',
    variant = 'primary',
    ariaLabel,
    ...props
}) => {
    const variantClass = styles[variant] || "";

    return (
        <button
            type={type}
            aria-label={ariaLabel}
            className={`${styles.button} ${variantClass} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
}

export default CustomButton;
