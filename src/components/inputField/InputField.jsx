import React, { forwardRef } from 'react';
import styles from './InputField.module.css';

const InputField = forwardRef(({
  className = '',
  value,
  onChange,
  required = false,
  error = false,
  errorMessage = '',
  ...props
}, ref) => {
  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
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
});

export default InputField;
