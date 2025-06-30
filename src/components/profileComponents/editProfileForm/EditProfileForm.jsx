import React, { useState } from 'react';
import InputField from '../../inputField/InputField';
import CustomSelect from '../../customSelect/CustomSelect';
import CustomButton from '../../customButton/CustomButton';
import styles from './EditProfileForm.module.css';

const genderOptions = [
  { value: 'male', label: 'Мужской' },
  { value: 'female', label: 'Женский' },
  { value: 'other', label: 'Другое' },
];

const EditProfileForm = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    name: user.name || '',
    surname: user.surname || '',
    patronymic: user.patronymic || '',
    email: user.email || '',
    gender: user.gender || '',
    birthdate: user.birthdate || '',
    photo: user.photo || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Сохранение профила', formData);
    onClose();
  }

  const handleChange = (field) => (value) => {
    console.log('Изменение профила', { [field]: value });
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Редактирование профиля</h2>

      <div className={styles.topRow}>
        <div className={styles.photoSection}>
          <label htmlFor="photo">Фото</label>
          <InputField
            id='photo'
            type='file'
            value={formData.photo}
            onChange={handleChange('photo')}
            placeholder='Фото'
          />
        </div>
        <div className={styles.fieldsSection}>
          <div className={styles.fieldItem}>
            <label htmlFor="username">Имя</label>
            <InputField
              autoFocus
              id='username'
              value={formData.name}
              onChange={handleChange('name')}
              placeholder='Имя *'
              required
            />
          </div>

          <div className={styles.fieldItem}>
            <label htmlFor="surname">Фамилия</label>
            <InputField
              id='surname'
              value={formData.surname}
              onChange={handleChange('surname')}
              placeholder='Фамилия'
            />
          </div>

          <div className={styles.fieldItem}>
            <label htmlFor="patronymic">Отчество</label>
            <InputField
              id='patronymic'
              value={formData.patronymic}
              onChange={handleChange('patronymic')}
              placeholder='Отчество'
            />
          </div>
        </div>
      </div>

      <div className={styles.fieldsSection}>
        <div className={styles.fieldItem}>
          <label htmlFor="email">Email</label>
          <InputField
            id='email'
            type='email'
            value={formData.email}
            onChange={handleChange('email')}
            placeholder='Email'
          />
        </div>

        <div className={styles.fieldItem}>
          <label htmlFor="email">Пол</label>
          <CustomSelect
            id='gender'
            options={genderOptions}
            value={formData.gender}
            onChange={handleChange('gender')}
            placeholder='Пол'
          />
        </div>

        <div className={styles.fieldItem}>
          <label htmlFor="birthdate">Дата рождения</label>
          <InputField
            id='birthdate'
            type='date'
            value={formData.birthdate}
            onChange={handleChange('birthdate')}
            placeholder='Дата рождения'
          />
        </div>
      </div>

      <div className={styles.editProfileActions}>
        <CustomButton type='submit' variant='primary'>
          Сохранить
        </CustomButton>
        <CustomButton onClick={onClose} variant='outline'>
          Отмена
        </CustomButton>
      </div>
    </form>
  );
}

export default EditProfileForm;
