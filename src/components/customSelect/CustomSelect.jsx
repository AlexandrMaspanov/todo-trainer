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

  const handleChange = (e) => {
    onChange(e);
    setIsOpen(false);
  };

const handleFocus = () => setIsOpen(true);
const handleBlur = () => setIsOpen(false);
const handleMouseDown = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.selectWrapper}>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        className={styles.select}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
      >
        <option value='' disabled hidden>{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▾</span>

    </div>
  );
};

export default CustomSelect;
