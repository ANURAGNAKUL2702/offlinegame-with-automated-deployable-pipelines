import React, { useState } from 'react';
import DinoGame from './components/DinoGame'; // Correct import if DinoGame.js is directly under components
import './App.css';

function App() {
  const [showGame, setShowGame] = useState(false);
  
  if (showGame) {
    return <DinoGame onExit={() => setShowGame(false)} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your App</h1>
        
        {/* Attractive Dino Game Button */}
        <div className="game-button-container" onClick={() => setShowGame(true)}>
          <div className="dino-icon">🦖</div>
          <div className="button-content">
            <span className="button-title">PLAY DINO GAME</span>
            <span className="button-subtitle">Click to start the adventure!</span>
          </div>
          <div className="button-arrow">🎮</div>
        </div>
      </header>
    </div>
  );
}

export default App;
