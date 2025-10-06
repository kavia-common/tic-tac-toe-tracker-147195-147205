import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial status "Next: X"', () => {
  render(<App />);
  const status = screen.getByText(/Next:\s*X/i);
  expect(status).toBeInTheDocument();
});

test('renders 9 squares', () => {
  render(<App />);
  // Each square is a button with aria-label "Square {n}, ..."
  const squares = screen.getAllByRole('button', { name: /Square \d, /i });
  expect(squares).toHaveLength(9);
});
