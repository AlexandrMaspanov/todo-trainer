import React, { useEffect, useState, useRef } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ hint, delay = 0, children }) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef();

  const show = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  // Очистка таймера при размонтировании
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      onMouseEnter={show}
      onMouseLeave={hide}
      onTouchStart={show}
      onTouchEnd={hide}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {hint && (
        <span className={`${styles.tooltip} ${visible ? styles.visible : ''}`}>
          {hint}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
