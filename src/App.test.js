import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /Play your offline game/i, level: 1 });
  expect(titleElement).toBeInTheDocument();
});
