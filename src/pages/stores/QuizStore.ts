import { create } from 'zustand';
import { questions } from '../../data';

export interface Question {
  id: number;
  questionText: string;
  options: { text: string; isCorrect: boolean }[];
}

interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  quizCompleted: boolean;
  score: number;
  setScore: (newScore: number) => void;
  selectAnswer: (answer: string) => void;
  resetScore: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: questions,
  currentQuestionIndex: 0,
  quizCompleted: false,
  score: 0,
  setScore: (newScore) => set({ score: newScore }),
  resetScore: () => set({ score: 0, currentQuestionIndex: 0, quizCompleted: false }),
  selectAnswer: (answer: string) => {
    const { questions, currentQuestionIndex, score } = get();
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find((option) => option.text === answer);

    if (selectedOption && selectedOption.isCorrect) {
      set({ score: score + 1 });
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      set({ currentQuestionIndex: nextQuestionIndex });
    } else {
      set({ quizCompleted: true });
    }
  },
}));
