import React from 'react';
import styles from './InputField.module.css';

const InputField = ({
  className = '',
  value,
  onChange,
  required = false,
  error = false,
  errorMessage = '',
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        className={`${styles.inputField} ${error ? styles.error : ''} ${className}`.trim()}
        {...props}
      />
      {error && errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
