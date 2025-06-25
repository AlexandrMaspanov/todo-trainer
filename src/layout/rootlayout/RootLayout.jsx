import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import AddTaskSidebar from '../../components/sidebar/AddTaskSidebar';
import styles from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
      <AddTaskSidebar />
      <Footer />
    </div>
  );
}

export default RootLayout;
