import { Question } from './interfaces/interfaces';

export const questions: Question[] = [
  {
    id: 1,
    questionText: 'What is the capital of France?',
    options: [
      { text: 'Berlin', isCorrect: false },
      { text: 'Madrid', isCorrect: false },
      { text: 'Paris', isCorrect: true },
      { text: 'Lisbon', isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: 'Who wrote "To Kill a Mockingbird"?',
    options: [
      { text: 'Harper Lee', isCorrect: true },
      { text: 'F. Scott Fitzgerald', isCorrect: false },
      { text: 'Ernest Hemingway', isCorrect: false },
      { text: 'Mark Twain', isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: 'What is the chemical symbol for water?',
    options: [
      { text: 'CO2', isCorrect: false },
      { text: 'O2', isCorrect: false },
      { text: 'H2O', isCorrect: true },
      { text: 'NaCl', isCorrect: false },
    ],
  },
];
