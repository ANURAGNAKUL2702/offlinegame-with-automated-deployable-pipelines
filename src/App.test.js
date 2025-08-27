import { render, screen } from '@testing-library/react';
import App from './App';

// A corrected test to check for the presence of the dashboard title.
test('renders CloudSniper DevOps Dashboard title', () => {
  // Renders the App component into a virtual DOM.
  render(<App />);
  
  // Uses screen.getByRole to find the h1 element with the name "CloudSniper".
  // This is a more robust way to select a specific element when text might be repeated.
  const titleElement = screen.getByRole('heading', { name: /CloudSniper/i, level: 1 });
  
  // Asserts that the element was found and is in the document.
  expect(titleElement).toBeInTheDocument();
});

// You can add more tests here to check for other elements,
// like "CI/CD Status", "Deployment", etc.
