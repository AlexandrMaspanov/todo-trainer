import React, { useRef } from 'react';
import CustomButton from '../../customButton/CustomButton';
import styles from './AvatarUpload.module.css';

const AvatarUpload = ({ value, onChange }) => {
  const fileInputRef = useRef(null);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.avatarUploader}>
      <div className={styles.previewWrapper}>
        <div className={styles.preview} onClick={triggerFileInput}>
          {value ? (
            <img src={value} alt='Фото профиля' />
          ) : (
            <span className={styles.placeholder}>+</span>
          )}
        </div>

        {value && (
          <CustomButton
            variant='minimal'
            aria-label="Удалить"
            onClick={() => onChange('')}
          >
            X
          </CustomButton>
        )}

        <input
          type="file"
          accept='image/*'
          onChange={handleFileChange}
          ref={fileInputRef}
          className={styles.inputFile}
        />
      </div>
    </div>
  );
}

export default AvatarUpload;
