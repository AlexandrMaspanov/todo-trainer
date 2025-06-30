import React, { useRef, useState } from 'react';
import { useSnackbarContext } from '../../../context/SnackbarProvider';
import CustomButton from '../../customButton/CustomButton';
import styles from './AvatarUpload.module.css';

const MAX_FILE_SIZE = 1024 * 1024 * 2; // 2MB

const AvatarUpload = ({ value, onChange }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const { showSnackbar } = useSnackbarContext();

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleFile = (file) => {
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      showSnackbar('Файл слишком большой (максимум 2MB)', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer?.files?.[0];
    handleFile(droppedFile);
  };

  return (
    <div className={`${styles.avatarUploader} ${isDragging ? styles.dragging : ''}`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
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
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.fileInput}
        />
      </div>
    </div>
  );
}

export default AvatarUpload;
