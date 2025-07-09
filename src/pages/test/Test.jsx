import React, { useState } from 'react';
import { useQuestions } from '../../hooks/useQuestions';
import { calculateResult } from '../../utils/calculateResult';
import ResultPieChart from '../../components/testComponents/resultPieChart/ResultPieChart';
import RadioOption from '../../components/radioOption/RadioOption';
import CustomButton from '../../components/customButton/CustomButton';
import Loader from '../../components/UI/loader/Loader';
import styles from './Test.module.css';

const Test = () => {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState('intro'); // intro | test | result
  const [resultData, setResultData] = useState(null);

  const { data: questions, isFetching, refetch } = useQuestions();

  const handleAnswer = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleStart = async () => {
    setAnswers({});
    setStep('test');
    await refetch();
  };

  const handleShowResult = async () => {
    setStep('result');
    const res = await calculateResult(answers, questions);
    setResultData(res);
  };

  const handleRetry = () => {
    setAnswers({});
    setStep('intro');
  };

  return (
    <div className={styles.test}>
      <h1 className={styles.title}>Тест продуктивности</h1>

      {step === 'intro' && (
        <>
          <p className={styles.description}>
            Этот тест поможет определить ваш стиль продуктивности: организованный планировщик, приоритетчик, визуализатор или командный организатор. Вы узнаете, какой подход к работе наиболее соответствует вашему мышлению.
          </p>
          <div className={styles.centeredButton}>
            <CustomButton onClick={handleStart} variant="primary">
              Пройти тест
            </CustomButton>
          </div>

        </>
      )}

      {step === 'test' && (
        <>
          {isFetching && <Loader />}

          {questions?.map(q => (
            <div key={q.id} className={styles.questionBlock}>
              <p className={styles.questionText}><strong>{q.text}</strong></p>
              {q.options.map(option => (
                <RadioOption
                  key={option.label}
                  name={`q${q.id}`}
                  label={option.label}
                  value={option.label}
                  checked={answers[q.id] === option.label}
                  onChange={() => handleAnswer(q.id, option.label)}
                />
              ))}
            </div>
          ))}

          {questions && !isFetching && (
            <div className={styles.centeredButton}>
              <CustomButton
                onClick={handleShowResult}
                disabled={Object.keys(answers).length < (questions?.length || 1)}
                variant="primary"
              >
                Показать результат
              </CustomButton >
            </div>
          )}
        </>
      )}

      {step === 'result' && resultData && (
        <>
          <h2 className={styles.title}>{resultData.result.title}</h2>

          <ResultPieChart
            counts={resultData.counts}
            dominantType={resultData.type}
          />

          <p className={styles.description}>{resultData.result.description}</p>

          <div className={styles.centeredButton}>
            <CustomButton onClick={handleRetry} variant="outline">
              Пройти тест ещё раз
            </CustomButton>
          </div>
        </>
      )}
    </div>
  );
}

export default Test;
