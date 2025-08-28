import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Your App title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /Your App/i, level: 1 });
  expect(titleElement).toBeInTheDocument();
});
