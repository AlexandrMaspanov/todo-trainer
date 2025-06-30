import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import styles from './BaseModal.module.css';

const BaseModal = ({onClose, children, lockScroll = true}) => {
  useBodyScrollLock(lockScroll);

  // Закрытие по Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}

export default BaseModal;
