import React from 'react';
import ResultPieChart from '../resultPieChart/ResultPieChart';
import EmptyState from '../../emptyState/EmptyState';
import CustomButton from '../../customButton/CustomButton';
import useSnackbar from '../../../hooks/useSnackbar';
import { getCurrentUserId, getUserById, updateUserById } from '../../../utils/storage';
import { useUser } from '../../../context/UserContext';
import { SNACK_TYPES } from '../../../constants';
import styles from './ResultDisplay.module.css';

const ResultDisplay = ({ resultData, onRetry }) => {
  const { showSnackbar } = useSnackbar();
  const { setCurrentUser } = useUser();

  const hasValidCounts = resultData.counts &&
    Object.values(resultData.counts).some(value => value > 0);

  const handleRetry = () => {
    const userId = getCurrentUserId();
    updateUserById(userId, { testResult: null });
    setCurrentUser(getUserById(userId));
    onRetry(); // сброс состояния теста
  };

  const handleClearResult = () => {
    handleRetry();
    showSnackbar('Результат теста удалён', SNACK_TYPES.INFO);
  };

  return (
    <div className={styles.resultCard}>
      <h2 className={styles.title}>{resultData.result.title}</h2>

      {hasValidCounts ? (
      <div className={styles.chart}>
        <ResultPieChart
          counts={resultData.counts}
          dominantType={resultData.type}
        />
      </div>
      ) : (
        <EmptyState
          message="Диаграмма недоступна"
          hint="Нет данных для отображения диаграммы"
        />
      )}

      <p className={styles.description}>{resultData.result.description}</p>

      <div className={styles.buttonGroup}>
        <CustomButton onClick={handleRetry} variant="primary">Пройти тест ещё раз</CustomButton>
        <CustomButton onClick={handleClearResult} variant="outline">Удалить результат</CustomButton>
      </div>
    </div>
  );
};

export default ResultDisplay;
