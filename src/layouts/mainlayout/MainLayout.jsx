import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../../store/sidebarSlice';
import { stopEditing } from '../../store/uiSlice';
import Overlay from '../../components/UI/overlay/Overlay';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import AddTaskSidebar from '../../components/sidebar/AddTaskSidebar';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const dispatch = useDispatch();

  const editingId = useSelector(state => state.ui.editingId);
  const isSidebarOpen = useSelector(state => state.sidebar.isOpen);

  const showOverlay = isSidebarOpen;

  const handleOverlayClick = () => {
    if (editingId !== null) {
      dispatch(stopEditing());
    }

    if (isSidebarOpen) {
      dispatch(closeSidebar());
    }
  }

  return (
    <div className={styles.mainLayout}>
      <Overlay
        isVisible={showOverlay}
        onClick={handleOverlayClick}
      />
      <Header />
      <Main />
      <AddTaskSidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => dispatch(closeSidebar())}
      />
      <Footer />
    </div>
  );
}

export default MainLayout;
