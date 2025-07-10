import React from 'react';
import RadioOption from '../../radioOption/RadioOption';
import CustomButton from '../../customButton/CustomButton';
import Loader from '../../UI/loader/Loader';
import styles from './QuestionBlock.module.css';

const QuestionBlock = ({
    questions,
    answers,
    isFetching,
    onAnswer,
    onSubmit
}) => {
    return (
        <>
            {isFetching && <Loader />}

            <div className={styles.questionSection}>
                {questions?.map((q) => (
                    <div key={q.id} className={styles.questionBlock}>
                        <p className={styles.questionText}><strong>{q.text}</strong></p>
                        <div className={styles.optionWrapper}>
                            {q.options.map((option) => (
                                <RadioOption
                                    key={option.label}
                                    name={`q${q.id}`}
                                    label={option.label}
                                    value={option.label}
                                    checked={answers[q.id] === option.label}
                                    onChange={() => onAnswer(q.id, option.label)}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                {questions && !isFetching && (
                    <div className={styles.centeredButton}>
                        <CustomButton
                            onClick={onSubmit}
                            disabled={Object.keys(answers).length < (questions?.length || 1)}
                            variant="primary"
                        >
                            Показать результат
                        </CustomButton>
                    </div>
                )}
            </div>
        </>
    );
};

export default QuestionBlock;
