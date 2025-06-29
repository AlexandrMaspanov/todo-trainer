import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import styles from './EmptyField.module.css';

const EmptyField = () => (
    <span className={styles.emptyField} title="Поле не заполнено">
        <FaRegEdit className={styles.icon} />
        <span className={styles.box}></span>
    </span>
);

export default EmptyField;
