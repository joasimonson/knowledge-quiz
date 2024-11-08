import React from 'react';
import { useQuizStore } from '../../stores/QuizStore';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const { score, resetScore, questions } = useQuizStore();

  const handlePlayAgain = () => {
    resetScore();
    navigate('/');
  };

  return (
    <div className="result">
      <h1>Your Score</h1>
      <p>
        You scored {score} out of {questions.length}
      </p>
      <button className="home-link" onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default Result;