import React from 'react';
import ResultPieChart from '../resultPieChart/ResultPieChart';
import CustomButton from '../../customButton/CustomButton';
import useSnackbar from '../../../hooks/useSnackbar';
import { getCurrentUserId, updateUserById } from '../../../utils/storage';
import { SNACK_TYPES } from '../../../constants';
import styles from './ResultDisplay.module.css';

const ResultDisplay = ({ resultData, onRetry }) => {
  const { showSnackbar } = useSnackbar();

  const handleClearResult = () => {
    updateUserById(getCurrentUserId(), { testResult: null });
    showSnackbar('Результат теста удалён', SNACK_TYPES.INFO);
    onRetry(); // сброс состояния теста
  };

  return (
    <div className={styles.resultCard}>
      <h2 className={styles.title}>{resultData.result.title}</h2>

      <div className={styles.chart}>
        <ResultPieChart
          counts={resultData.counts}
          dominantType={resultData.type}
        />
      </div>

      <p className={styles.description}>{resultData.result.description}</p>

      <div className={styles.buttonGroup}>
        <CustomButton onClick={onRetry} variant="primary">Пройти тест ещё раз</CustomButton>
        <CustomButton onClick={handleClearResult} variant="outline">Удалить результат</CustomButton>
      </div>
    </div>
  );
};

export default ResultDisplay;
