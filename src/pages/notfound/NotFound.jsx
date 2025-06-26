import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import CustomLink from '../../components/customLink/CustomLink';
import styles from './NotFound.module.css';

const NotFound = () => {
  const error = useRouteError();

  let title = 'Ошибка';
  let message = 'Что-то пошло не так.';

  if (isRouteErrorResponse(error)) {
    title = `${error.status}: ${error.statusText}`;

    if (error.status === 404) {
      message = 'Страница не найдена';
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
      <span className={styles.icon}>🗺️</span> {title}
      </h1>
      <p className={styles.message}>{message}</p>
      <CustomLink to='/'>На главную</CustomLink>
    </div>
  );
}

export default NotFound;
