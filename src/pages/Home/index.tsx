import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../stores/QuizStore';
import './index.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { setScore } = useQuizStore()

  const handleStartQuiz = () => {
    setScore(0);
    navigate('/quiz');
  };

  return (
    <div className="home">
      <h1>General Knowledge Quiz</h1>
      <p>Test your knowledge on various topics!</p>
      <button className='start-button' onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default Home;
