import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page sections', () => {
  render(<App />);
  expect(screen.getByText(/react-bootstrap/i)).toBeInTheDocument();
  expect(screen.getByText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/hanoi/i)).toBeInTheDocument();
});
