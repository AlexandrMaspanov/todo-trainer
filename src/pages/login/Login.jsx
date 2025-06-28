import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CustomButton from '../../components/customButton/CustomButton';
import CustomLink from '../../components/customLink/CustomLink';
import CustomSelect from '../../components/customSelect/CustomSelect';
import { setTodos } from '../../store/todoSlice';
import { getStoragedUsers, getTodosByUserId, setCurrentUserId } from '../../utils/storage';
import styles from './Login.module.css';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setUsers(getStoragedUsers());
  }, []);

  const options = users.map(user => ({
    value: user.id,
    label: user.name,
  }));

  const handleLogin = (e) => {
    e.preventDefault();

    if (!selectedUserId) return;

    setCurrentUserId(selectedUserId);

    const userTodos = getTodosByUserId(selectedUserId);
    dispatch(setTodos(userTodos));

    navigate('/');
  }

  return (
    <section className={styles.loginSection}>
      <h1>Вход</h1>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <label htmlFor="userselect">Пользователь</label>
        <CustomSelect
          id='userselect'
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
