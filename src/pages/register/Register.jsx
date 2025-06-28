import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/inputField/InputField';
import CustomButton from '../../components/customButton/CustomButton';
import { getStoragedUsers, setCurrentUserId, setStoragedUsers } from '../../utils/storage';
import styles from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const userId = `${name.trim().toLowerCase()}-${Date.now()}`;

    const users = getStoragedUsers();

    const alreadyExists = users.some(user => user.name.toLowerCase() === name.trim().toLowerCase());

    if (alreadyExists) {
      alert('Пользователь с таким именем уже существует');
      return;
    }

    const newUser = { id: userId, name: name.trim()};
    const updatedUsers = [...users, newUser];

    setStoragedUsers(updatedUsers);
    setCurrentUserId(newUser.id);

    navigate('/profile');
  }

  return (
    <section className={styles.registerSection}>
      <h1>Регистрация</h1>
      <form className={styles.registerForm} onSubmit={handleRegister}>
        <label htmlFor="username">Имя пользователя</label>
        <InputField
          id='username'
          value={name}
          onChange={(e) => setName(e.target.value)}
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
