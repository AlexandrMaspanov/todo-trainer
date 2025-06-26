import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../../store/sidebarSlice';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import AddTaskSidebar from '../../components/sidebar/AddTaskSidebar';
import styles from './RootLayout.module.css';

const RootLayout = () => {
  const isOpen = useSelector(state => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <div className={styles.layout}>
      <Header />
      <Main />
      <AddTaskSidebar
        isOpen={isOpen}
        onClose={() => dispatch(closeSidebar())}
      />
      <Footer />
    </div>
  );
}

export default RootLayout;
