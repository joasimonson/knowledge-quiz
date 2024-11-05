import { screen } from '@testing-library/react';
import Home from './index';
import { render } from '../../tests/test-utils';

describe('Home Component', () => {
  it('renders the welcome message and start button', () => {
    render(<Home />);

    expect(screen.getByText(/General Knowledge Quiz/i)).toBeInTheDocument();
    expect(screen.getByText(/Start Quiz/i)).toBeInTheDocument();
  });

  it('navigates to the quiz page when start button is clicked', () => {
    render(<Home />);

    const startButton = screen.getByText(/Start Quiz/i);
    
    expect(startButton.closest('a')).toHaveAttribute('href', '/quiz');
  });
});
