import { create } from 'zustand';
import { Question } from '../interfaces/interfaces';

interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  quizCompleted: boolean;
  score: number;
  setQuestions: (newScore: Question[]) => void;
  setScore: (newScore: number) => void;
  selectAnswer: (answer: string) => void;
  resetScore: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  quizCompleted: false,
  score: 0,
  setQuestions: (newQuestions) => set({questions: newQuestions}),
  setScore: (newScore) => set({ score: newScore }),
  resetScore: () => set({ questions: [], score: 0, currentQuestionIndex: 0, quizCompleted: false }),
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
