import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../stores/QuizStore';
import './index.css';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const {
    questions,
    currentQuestionIndex,
    selectAnswer,
    quizCompleted,
  } = useQuizStore();

  useEffect(() => {
    if (quizCompleted) {
      navigate('/result');
    }
  }, [quizCompleted, navigate]);

  if (quizCompleted)
    return null;

  const question = questions[currentQuestionIndex];
  //add question check to handle null (conditional rendering)
  return (
    <div className="quiz">
      <h2>{question.questionText}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => selectAnswer(option.text)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
