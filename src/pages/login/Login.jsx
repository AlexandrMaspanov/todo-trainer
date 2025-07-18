import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import UserPreview from '../../components/userPreview/UserPreview';
import CustomButton from '../../components/customButton/CustomButton';
import CustomLink from '../../components/customLink/CustomLink';
import CustomSelect from '../../components/customSelect/CustomSelect';
import Loader from '../../components/UI/loader/Loader';
import useSnackbar from '../../hooks/useSnackbar';
import { setTodos } from '../../store/todoSlice';
import { setFilter } from '../../store/filterSlice';
import { getStoragedUsers, getTodosByUserId, getUserById, setCurrentUserId } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import { SNACK_TYPES } from '../../constants';
import styles from './Login.module.css';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();
  const { setCurrentUser } = useUser();

  useEffect(() => {
    setUsers(getStoragedUsers());
  }, []);

  const options = users.map(user => ({
    value: user.id,
    label: user.name,
  }));

  const handleLogin = (e) => {
    e.preventDefault();

    if (!selectedUserId) {
      showSnackbar('Выберите пользователя', SNACK_TYPES.ERROR);
      return;
    }

    setLoading(true);
    setCurrentUserId(selectedUserId);
    setCurrentUser(getUserById(selectedUserId));

    const userTodos = getTodosByUserId(selectedUserId);
    dispatch(setTodos(userTodos));

    dispatch(setFilter('all'));

    showSnackbar('Добро пожаловать!', SNACK_TYPES.SUCCESS);
    navigate('/');
  }

  const selectedUser = users.find(u => u.id === selectedUserId);

  return (
    <section className={styles.loginSection}>
      <h1>Вход</h1>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        {users.length === 0 ? (
          <p className={styles.emptyMessage}>Нет доступных пользователей</p>
        ) : (
          <>
            <label htmlFor="userselect" className={styles.userLabel}>
              <FaUserCircle className={styles.userIconInline} />
            </label>
            <CustomSelect
              id='userselect'
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              options={options}
              placeholder='Выберите пользователя'
            />

            {selectedUser && (
              <UserPreview photo={selectedUser.photo} name={selectedUser.name} />
            )}

          </>
        )}
        <CustomButton type='submit' disabled={!selectedUserId || loading} fullWidth>
          {loading ? <Loader /> : 'Войти'}
        </CustomButton>
      </form>

      <p className={styles.loginRedirect}>
        Нет аккаунта? <CustomLink to="/register" state={{ from: location.pathname }}>Зарегистрируйтесь</CustomLink>
      </p>
    </section>
  );
}

export default Login;
