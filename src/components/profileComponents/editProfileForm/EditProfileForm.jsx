import React, { useState } from 'react';
import { useUser } from '../../../context/UserContext';
import AvatarUpload from '../../UI/avatarUpload/AvatarUpload';
import InputField from '../../inputField/InputField';
import CustomSelect from '../../customSelect/CustomSelect';
import CustomButton from '../../customButton/CustomButton';
import Tooltip from '../../tooltip/Tooltip';
import DeleteProfileButton from '../deleteProfileButton/DeleteProfileButton';
import { getCurrentUserId, updateUserById } from '../../../utils/storage';
import { useFormValidation } from '../../../hooks/useFormValidation';
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
    birthdate: user.birthdate || '',
    gender: user.gender || '',
    email: user.email || '',
    photo: user.photo || '',
    testResult: user.testResult || '',
  });
  const { errors, isValid } = useFormValidation(formData);
  const { setCurrentUser } = useUser();

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = getCurrentUserId();
    if (!userId) {
      console.warn('Не найден текущий пользователь');
      return;
    }

    updateUserById(userId, formData);
    setCurrentUser(formData);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Редактирование профиля</h2>

      <div className={styles.profileFields}>
        <div className={styles.topRow}>
          <div className={styles.photoSection}>
            <AvatarUpload
              id='photo'
              value={formData.photo}
              onChange={handleChange('photo')}
            />
          </div>
          <div className={styles.fieldsSection}>
            <div className={styles.fieldItem}>
              <label htmlFor="username">Имя</label>
              <Tooltip hint={errors.name || ''} delay={300}>
                <InputField
                  id='username'
                  autoFocus
                  value={formData.name}
                  onChange={handleChange('name')}
                  placeholder='Имя *'
                  required
                  error={errors.name}
                />
              </Tooltip>
            </div>

            <div className={styles.fieldItem}>
              <label htmlFor="surname">Фамилия</label>
              <Tooltip hint={errors.surname || ''} delay={300}>
                <InputField
                  id='surname'
                  value={formData.surname}
                  onChange={handleChange('surname')}
                  placeholder='Фамилия'
                  error={errors.surname}
                />
              </Tooltip>
            </div>

            <div className={styles.fieldItem}>
              <label htmlFor="patronymic">Отчество</label>
              <Tooltip hint={errors.patronymic || ''} delay={300}>
                <InputField
                  id='patronymic'
                  value={formData.patronymic}
                  onChange={handleChange('patronymic')}
                  placeholder='Отчество'
                  error={errors.patronymic}
                />
              </Tooltip>
            </div>
          </div>
        </div>

        <div className={styles.fieldsSection}>
          <div className={styles.fieldItem}>
            <label htmlFor="birthdate">Дата рождения</label>
            <Tooltip hint={errors.birthdate || ''} delay={300}>
              <InputField
                id='birthdate'
                type='date'
                value={formData.birthdate}
                onChange={handleChange('birthdate')}
                placeholder='Дата рождения'
                error={errors.birthdate}
              />
            </Tooltip>
          </div>

          <div className={styles.fieldItem}>
            <label htmlFor="gender">Пол</label>
            <CustomSelect
              id='gender'
              options={genderOptions}
              value={formData.gender}
              onChange={(e) => handleChange('gender')(e.target.value)}
              placeholder='Пол'
            />
          </div>

          <div className={styles.fieldItem}>
            <label htmlFor="email">Email</label>
            <Tooltip hint={errors.email || ''} delay={300}>
              <InputField
                id='email'
                type='email'
                value={formData.email}
                onChange={handleChange('email')}
                placeholder='Email'
                error={errors.email}
              />
            </Tooltip>
          </div>
        </div>
      </div>

      <div className={styles.editProfileActions}>
        <CustomButton
          type='submit'
          variant='primary'
          disabled={!isValid}
        >
          Сохранить
        </CustomButton>
        <CustomButton
          variant='outline'
          onClick={onClose}
        >
          Отмена
        </CustomButton>
      </div>

      <DeleteProfileButton />
    </form>
  );
}

export default EditProfileForm;
