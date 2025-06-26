import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ className, ...props }) => {
  return (
    <input
        type='text'
        {...props}
        className={`${styles.inputField} ${className}`}
    />
  );
}

export default InputField;
