import React, { useState } from 'react';
import styles from './CustomSelect.module.css';

const CustomSelect = ({
  id,
  value,
  onChange,
  options,
  placeholder = 'Выберите значение',
  disabled = false,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.selectWrapper} ${isOpen ? styles.open : ''}`}
      onBlur={() => setIsOpen(false)}
    >
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.select}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className={styles.arrow} />
    </div>
  );
};

export default CustomSelect;
