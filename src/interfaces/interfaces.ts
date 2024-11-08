export interface Question {
  id: number;
  questionText: string;
  options: { text: string; isCorrect: boolean }[];
}