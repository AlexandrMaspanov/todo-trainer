import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import InputField from '../../components/inputField/InputField';
import CustomButton from '../../components/customButton/CustomButton';
import useSnackbar from '../../hooks/useSnackbar';
import { getStoragedUsers, setCurrentUserId, setStoragedUsers } from '../../utils/storage';
import styles from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const { showSnackbar } = useSnackbar();
  const minLength = 2;

  const handleRegister = (e) => {
    e.preventDefault();

    const trimmed = name.trim();

    if (!trimmed) {
      showSnackbar('Имя пользователя не может быть пустым', 'error');
      return;
    }

    if (trimmed.length < minLength) {
      showSnackbar(`Минимум ${minLength} символа`, 'error');
      return;
    }

    const userId = `${trimmed.toLowerCase()}-${Date.now()}`;
    const users = getStoragedUsers();

    const alreadyExists = users.some(user => user.name.toLowerCase() === trimmed.toLowerCase());

    if (alreadyExists) {
      showSnackbar('Пользователь с таким именем уже существует', 'error');
      return;
    }

    const newUser = { id: userId, name: trimmed };
    const updatedUsers = [...users, newUser];

    setStoragedUsers(updatedUsers);
    setCurrentUserId(newUser.id);
    showSnackbar('Пользователь зарегистрирован!', 'success');

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
          onChange={(e) => setName(e.target.value.trim())}
          placeholder='Имя пользователя'
          required
        />
        <CustomButton type='submit'>
          Зарегистрироваться
        </CustomButton>
      </form>
    </section>
  );
}

export default Register;
