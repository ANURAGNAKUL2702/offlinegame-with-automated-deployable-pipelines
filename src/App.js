import React, { useState } from 'react';
import DinoGame from './components/DinoGame'; 
import './App.css';

function App() {
  const [showGame, setShowGame] = useState(false);

  if (showGame) {
    return <DinoGame onExit={() => setShowGame(false)} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Play your offline game</h1>

        {/* Replace old container with single PLAY button */}
        <button className="play-button" onClick={() => setShowGame(true)}>
          CLICK HERE TO PLAY
        </button>
      </header>
    </div>
  );  
}

export default App;
   