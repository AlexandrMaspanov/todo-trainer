import React from 'react';
import UserPreview from '../../userPreview/UserPreview';
import EmptyField from '../../emptyField/EmptyField';
import PREVIEW_SIZES from '../../../constants/previewSizes';
import styles from './UserCard.module.css';

const UserCard = ({ user }) => {
    if (!user) return null;

    const {
        name,
        surname,
        patronymic,
        birthdate,
        gender,
        email,
        photo,
        id,
    } = user;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <UserPreview photo={photo} name={name} size={PREVIEW_SIZES.LARGE} />
            </div>

            <div className={styles.grid}>
                <span className={styles.label}>Имя:</span>
                <span className={styles.value}>
                    {name ? name : <EmptyField />}
                </span>

                <span className={styles.label}>Фамилия:</span>
                <span className={styles.value}>
                    {surname ? surname : <EmptyField />}
                </span>

                <span className={styles.label}>Отчество:</span>
                <span className={styles.value}>
                    {patronymic ? patronymic : <EmptyField />}
                </span>

                <span className={styles.label}>Дата рождения:</span>
                <span className={styles.value}>
                    {birthdate ? birthdate : <EmptyField />}
                </span>

                <span className={styles.label}>Пол:</span>
                <span className={styles.value}>
                    {gender === 'male' ? 'Мужской' : gender === 'female' ? 'Женский' : <EmptyField />}
                </span>

                <span className={styles.label}>Email:</span>
                <span className={styles.value}>
                    {email ? email : <EmptyField />}
                </span>

                <span className={styles.label}>ID:</span>
                <span className={styles.value}>
                    {id ? <code>{id}</code> : <EmptyField />}
                </span>
            </div>

        </div>
    );
}

export default UserCard;
