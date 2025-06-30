import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import InputField from '../../components/inputField/InputField';
import CustomButton from '../../components/customButton/CustomButton';
import useSnackbar from '../../hooks/useSnackbar';
import { getStoragedUsers, setCurrentUserId, setStoragedUsers } from '../../utils/storage';
import { SNACK_TYPES } from '../../constants';
import styles from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const navigate = useNavigate();

  const { showSnackbar } = useSnackbar();
  const minLength = 2;

  const handleRegister = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      showSnackbar('Имя не может быть пустым', SNACK_TYPES.ERROR);
      return;
    }

    if (trimmedName.length < minLength) {
      showSnackbar(`Имя должно быть минимум ${minLength} символа`, SNACK_TYPES.ERROR);
      return;
    }

    const users = getStoragedUsers();

    const alreadyExists = users.some(user => user.name.toLowerCase() === trimmedName.toLowerCase());

    if (alreadyExists) {
      showSnackbar('Пользователь с таким именем уже существует', SNACK_TYPES.ERROR);
      return;
    }

    const newUserId = `${trimmedName.toLowerCase()}-${Date.now()}`;
    const newUser = {
      id: newUserId,
      name: trimmedName,
      surname: surname.trim() || null,
      patronymic: patronymic.trim() || null,
      photo: null
    };
    const updatedUsers = [...users, newUser];

    setStoragedUsers(updatedUsers);
    setCurrentUserId(newUser.id);
    showSnackbar('Пользователь зарегистрирован!', SNACK_TYPES.SUCCESS);

    navigate('/profile');
  }

  return (
    <section className={styles.registerSection}>
      <h1>Регистрация</h1>
      <form className={styles.registerForm} onSubmit={handleRegister}>
        <label htmlFor="username" className={styles.userLabel}>
          <FaUserPlus className={styles.icon} />
        </label>

        <InputField
          autoFocus
          id='username'
          value={name}
          onChange={setName}
          placeholder='Имя *'
          required
        />

        <InputField
          id="surname"
          value={surname}
          onChange={setSurname}
          placeholder="Фамилия"
        />

        <InputField
          id="patronymic"
          value={patronymic}
          onChange={setPatronymic}
          placeholder="Отчество"
        />

        <CustomButton type='submit' fullWidth>
          Зарегистрироваться
        </CustomButton>
      </form>
    </section>
  );
}

export default Register;
