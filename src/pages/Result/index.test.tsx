import { screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import Result from './index';
import { render } from '../../tests/test-utils';

describe('Result Component', () => {
  const renderResultWithScore = (score: number) => {
    render(
      <Routes>
        <Route path="/result" element={<Result />} />
      </Routes>,
      {
        //initialEntries: [{ pathname: '/result', state: { score } }]
      }
    );
  };

  it('displays the score and appropriate message for high scores', () => {
    renderResultWithScore(3);

    expect(screen.getByText(/Your Score: 3\/3/i)).toBeInTheDocument();
    expect(screen.getByText(/Amazing! You got everything right!/i)).toBeInTheDocument();
  });

  it('displays a different message for medium scores', () => {
    renderResultWithScore(2);

    expect(screen.getByText(/Your Score: 2\/3/i)).toBeInTheDocument();
    expect(screen.getByText(/Great job! You know quite a bit!/i)).toBeInTheDocument();
  });

  it('displays a different message for low scores', () => {
    renderResultWithScore(1);

    expect(screen.getByText(/Your Score: 1\/3/i)).toBeInTheDocument();
    expect(screen.getByText(/Keep learning! You can do it!/i)).toBeInTheDocument();
  });

  it('includes a link to go back to the home page', () => {
    renderResultWithScore(1);
    const playAgainLink = screen.getByText(/Play Again/i);
    expect(playAgainLink.closest('a')).toHaveAttribute('href', '/');
  });
});
