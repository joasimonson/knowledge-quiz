import { screen, fireEvent } from '@testing-library/react';
import Quiz from './index';
import { questions } from '../../data';
import { render } from '../../tests/test-utils';

describe('Quiz Component', () => {
  it('renders the first question and options', () => {
    render(<Quiz />);

    expect(screen.getByText(questions[0].questionText)).toBeInTheDocument();

    questions[0].options.forEach(option => {
      expect(screen.getByText(option.text)).toBeInTheDocument();
    });
  });

  it('navigates to the next question when an option is clicked', () => {
    render(<Quiz />);

    const firstOption = screen.getByText(questions[0].options[0].text);
    fireEvent.click(firstOption);

    expect(screen.getByText(questions[1].questionText)).toBeInTheDocument();
  });

  it('navigates to the results page after the last question', () => {
    render(<Quiz />);

    questions.forEach((_, index) => {
      const option = screen.getByText(questions[index].options[0].text);
      fireEvent.click(option);
    });

    expect(screen.getByText('Your Score')).toBeInTheDocument();
  });
});
