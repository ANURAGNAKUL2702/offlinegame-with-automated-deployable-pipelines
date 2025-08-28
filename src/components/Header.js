import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // optional for button styles

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="App-header">
      <h1>Your App</h1>
      <button className="game-button-container" onClick={() => navigate('/game')}>
        <span className="dino-icon">🦖</span>
        <div className="button-content">
          <span className="button-title">PLAY DINO GAME</span>
          <span className="button-subtitle">Click to start the adventure!</span>
        </div>
        <span className="button-arrow">🎮</span>
      </button>
    </header>
  );
};

export default Header;
