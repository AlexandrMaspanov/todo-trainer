import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CustomLink.module.css';

const CustomLink = ({ to, children }) => {
    return (
        <Link to={to} className={styles.link}>
            {children}
        </Link>
    );
}

export default CustomLink;
