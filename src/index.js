import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Imports your global styles, including body background
import App from './App'; // Imports your main game component
import reportWebVitals from './reportWebVitals';

// Creates a root for your React application to render into the HTML document
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders your main App component (which contains the game) into the root.
// React.StrictMode helps highlight potential problems in an application.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This function is for measuring performance in your app.
// You don't need to worry about it for the game's functionality.
reportWebVitals();