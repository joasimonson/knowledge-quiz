import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../../stores/QuizStore';
import { Question } from '../../interfaces/interfaces';
import './index.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { setScore, setQuestions } = useQuizStore()

  useEffect(() => {
    async function getQuestions() {
      const response = await fetch('api/questions');
      const data = await response.json() as Question[];
      setQuestions(data);
    }
    getQuestions();
  })

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
