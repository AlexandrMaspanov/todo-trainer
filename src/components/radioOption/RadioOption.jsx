import React from 'react';
import styles from './RadioOption.module.css';

const RadioOption = ({ label, name, value, checked, onChange }) => {
  return (
    <label className={styles.optionLabel}>
        <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={() => onChange(value)}
            className={styles.radioInput}
        />
        <span className={styles.labelText}>{label}</span>
    </label>
  );
}

export default RadioOption;
