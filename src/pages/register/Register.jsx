import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUserPlus } from 'react-icons/fa';
import InputField from '../../components/inputField/InputField';
import CustomButton from '../../components/customButton/CustomButton';
import Tooltip from '../../components/tooltip/Tooltip';
import { useFormValidation } from '../../hooks/useFormValidation';
import useSnackbar from '../../hooks/useSnackbar';
import { getStoragedUsers, getTodosByUserId, getUserById, setCurrentUserId, setStoragedUsers } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import { setTodos } from '../../store/todoSlice';
import { setFilter } from '../../store/filterSlice';
import { SNACK_TYPES } from '../../constants';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    patronymic: ''
  });
  const { errors, isValid } = useFormValidation(formData);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setCurrentUser } = useUser();
  const { showSnackbar } = useSnackbar();
  const minLength = 2;

  const from = location.state?.from || '/login'; // если не передано, по умолчанию на страницу login

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();

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
      surname: formData.surname.trim() || null,
      patronymic: formData.patronymic.trim() || null,
    };
    const updatedUsers = [...users, newUser];

    setStoragedUsers(updatedUsers);
    setCurrentUserId(newUser.id);
    setCurrentUser(getUserById(newUser.id));

    const userTodos = getTodosByUserId(newUser.id);
    dispatch(setTodos(userTodos));

    dispatch(setFilter('all'));

    showSnackbar('Пользователь зарегистрирован!', SNACK_TYPES.SUCCESS);

    navigate('/profile');
  }

  const handleBack = () => {
    navigate(from);
  };

  return (
    <section className={styles.registerSection}>
      <h1>Регистрация</h1>
      <form className={styles.registerForm} onSubmit={handleRegister}>
        <label htmlFor="username" className={styles.userLabel}>
          <FaUserPlus className={styles.icon} />
        </label>

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

        <Tooltip hint={errors.surname || ''} delay={300}>
          <InputField
            id='surname'
            value={formData.surname}
            onChange={handleChange('surname')}
            placeholder='Фамилия'
            error={errors.surname}
          />
        </Tooltip>

        <Tooltip hint={errors.patronymic || ''} delay={300}>
          <InputField
            id='patronymic'
            value={formData.patronymic}
            onChange={handleChange('patronymic')}
            placeholder='Отчество'
            error={errors.patronymic}
          />
        </Tooltip>

        <div className={styles.registerActions}>
          <CustomButton
            type='submit'
            disabled={!isValid}
          >
            Зарегистрироваться
          </CustomButton>
          <CustomButton
            variant='outline'
            onClick={handleBack}
          >
            ← Назад
          </CustomButton>
        </div>
      </form>
    </section>
  );
}

export default Register;
