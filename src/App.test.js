import { render, screen } from '@testing-library/react';
import App from './App';

// A corrected test to check for the presence of the dashboard title.
test('renders CloudSniper DevOps Dashboard title', () => {
  // Renders the App component into a virtual DOM.
  render(<App />);
  
  // Uses screen.getByText() to find the "CloudSniper" text.
  // The 'i' flag makes the search case-insensitive.
  const titleElement = screen.getByText(/CloudSniper/i);
  
  // Asserts that the element was found and is in the document.
  expect(titleElement).toBeInTheDocument();
});

// You can add more tests here to check for other elements,
// like "CI/CD Status", "Deployment", etc.
