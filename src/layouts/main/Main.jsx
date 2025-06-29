import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default Main;
