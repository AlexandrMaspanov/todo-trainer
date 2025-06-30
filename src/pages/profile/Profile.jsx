import React, { useState } from 'react';
import BaseModal from '../../components/UI/baseModal/BaseModal';
import UserCard from '../../components/profileComponents/userCard/userCard';
import CustomButton from '../../components/customButton/CustomButton';
import { getStoragedUsers, getCurrentUserId } from '../../utils/storage';
import styles from './Profile.module.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const users = getStoragedUsers();
  const currentUserId = getCurrentUserId();
  const user = users.find(u => u.id === currentUserId);

  if (!user) {
    return <div className={styles.empty}>Пользователь не найден</div>;
  }

  const handleEdit = () => setIsEditing(true);
  const handleClose = () => setIsEditing(false);

  return (
    <>
      {isEditing && (
        <BaseModal onClose={handleClose}>
          <p>Здесь будет модальное окно редактирования профиля пользователя</p>
        </BaseModal>
      )}

      <section className={styles.profileSection}>
        <div className={styles.headerRow}>
          <h1 className="pageTitle">Профиль</h1>
          <div className={styles.editButtonWrapper}>
            <CustomButton variant="outline" fullWidth onClick={handleEdit}>
              Редактировать
            </CustomButton>
          </div>

        </div>

        {user && <UserCard user={user} />}
      </section>
    </>
  );
};

export default Profile;
