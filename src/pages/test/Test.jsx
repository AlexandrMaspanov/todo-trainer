import React, { useEffect, useState } from 'react';
import { useTestData } from '../../hooks/useTestData';
import { calculateResult } from '../../utils/calculateResult';
import { getCurrentUserId, getUserById, updateUserById } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import QuestionBlock from '../../components/testComponents/questionBlock/QuestionBlock';
import ResultDisplay from '../../components/testComponents/resultDisplay/ResultDisplay';
import CustomButton from '../../components/customButton/CustomButton';
import styles from './Test.module.css';

const Test = () => {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState('intro'); // intro | test | result
  const [resultData, setResultData] = useState(null);
  const {
    questions,
    isFetching,
    refetchQuestions,
    refetchResults
  } = useTestData();
  const { setCurrentUser } = useUser();

  useEffect(() => {
    const preloadResult = async () => {
      const user = getUserById(getCurrentUserId());

      if (user?.testResult?.type) {
        const { data } = await refetchResults();
        const type = user.testResult.type;

        setStep('result');
        setResultData({
          type,
          counts: user.testResult.counts,
          result: data[type]
        });
      }
    };

    preloadResult();
  }, []);

  const handleAnswer = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleStart = async () => {
    setAnswers({});
    setStep('test');
    await refetchQuestions();
  };

  const handleShowResult = async () => {
    setStep('result');
    const res = await calculateResult(answers, questions);
    setResultData(res);

    updateUserById(getCurrentUserId(), {
      testResult: {
        type: res.type,
        counts: res.counts,
        timestamp: Date.now()
      }
    });
    setCurrentUser(getUserById(getCurrentUserId()));
  };

  const handleRetry = () => {
    setAnswers({});
    setResultData(null);
    setStep('intro');
  };

  const isReadyToDisplayResult = step === 'result' && resultData;

  return (
    <section className={styles.testSection}>
      <div className={styles.headerRow}>
        <h1 className="pageTitle">Тест продуктивности</h1>
      </div>

      {isReadyToDisplayResult && (
        <ResultDisplay
          resultData={resultData}
          onRetry={handleRetry}
        />
      )}

      {step === 'intro' && !resultData && (
        <>
          <p className={styles.description}>
            Этот тест поможет определить ваш стиль продуктивности: организованный планировщик, приоритетчик, визуализатор или командный организатор. Вы узнаете, какой подход к работе наиболее соответствует вашему мышлению.
          </p>
          <div className={styles.centeredButton}>
            <CustomButton onClick={handleStart} variant="primary">Пройти тест</CustomButton>
          </div>
        </>
      )}

      {step === 'test' && (
        <QuestionBlock
          questions={questions}
          answers={answers}
          isFetching={isFetching}
          onAnswer={handleAnswer}
          onSubmit={handleShowResult}
        />
      )}
    </section>
  );
}

export default Test;
