import React from 'react';
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
    return (
        <select
            id={id}
            className={styles.select}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
        >
            <option value='' disabled hidden>
                {placeholder}
            </option>
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}

export default CustomSelect;
