import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsersStorage } from '../../hooks/useUsersStorage';
import CustomButton from '../../components/customButton/CustomButton';
import CustomLink from '../../components/customLink/CustomLink';
import CustomSelect from '../../components/customSelect/CustomSelect';
import styles from './Login.module.css';

const Login = () => {
  useUsersStorage();
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('users');
    if (stored) {
      setUsers(JSON.parse(stored))
    }
  }, []);

  const options = users.map(user => ({
    value: user.id,
    label: user.name,
  }));

  const handleLogin = (e) => {
    e.preventDefault();

    if (!selectedUserId) return;

    localStorage.setItem('userId', selectedUserId);

    navigate('/');
  }

  return (
    <section className={styles.loginSection}>
      <h1>Вход</h1>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <label htmlFor="user-select">Пользователь</label>
        <CustomSelect
          id='user-select'
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          options={options}
          placeholder='Выберите пользователя'
        />
        <CustomButton type='submit' disabled={!selectedUserId}>Войти</CustomButton>
      </form>

      <p className={styles.loginRedirect}>
        Нет аккаунта? <CustomLink onClick={() => navigate('/register')}>Зарегистрируйтесь</CustomLink>
      </p>
    </section>
  );
}

export default Login;
