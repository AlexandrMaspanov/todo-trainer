import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CustomLink.module.css';

const CustomLink = ({
    to,
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const variantClass = styles[variant] || '';

    return (
        <Link
            to={to}
            className={`${styles.link} ${variantClass} ${className}`.trim()}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
