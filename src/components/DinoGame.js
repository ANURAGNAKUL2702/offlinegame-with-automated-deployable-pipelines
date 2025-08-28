import React, { useEffect, useRef, useState } from 'react';

const DinoGame = ({ onExit }) => {
  const canvasRef = useRef(null);
  const [gameRestart, setGameRestart] = useState(0); // trigger restart

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 200;

    // Game variables
    let dino = { x: 50, y: 150, width: 30, height: 50, jumping: false, velocity: 0 };
    let obstacles = [];
    let score = 0;
    let gameSpeed = 5;
    let gameOver = false;

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = '#535353';
      ctx.fillRect(0, 170, canvas.width, 30);

      // Draw dino
      ctx.fillStyle = '#000';
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

      // Draw obstacles
      ctx.fillStyle = '#000';
      obstacles.forEach(obs => ctx.fillRect(obs.x, obs.y, obs.width, obs.height));

      // Draw score
      ctx.fillStyle = '#000';
      ctx.font = '20px Arial';
      ctx.fillText(`Score: ${score}`, 20, 30);

      updateDino();
      updateObstacles();
      checkCollisions();

      if (!gameOver) requestAnimationFrame(gameLoop);
    }

    function updateDino() {
      if (dino.jumping) {
        dino.y += dino.velocity;
        dino.velocity += 0.5;

        if (dino.y >= 150) {
          dino.y = 150;
          dino.jumping = false;
          dino.velocity = 0;
        }
      }
    }

    function updateObstacles() {
      obstacles.forEach(obs => obs.x -= gameSpeed);
      obstacles = obstacles.filter(obs => obs.x > -50);

      if (Math.random() < 0.02) {
        obstacles.push({ x: 800, y: 150, width: 20, height: 30 });
      }

      score++;
      if (score % 100 === 0) gameSpeed += 0.5;
    }

    function checkCollisions() {
      obstacles.forEach(obs => {
        if (dino.x < obs.x + obs.width &&
            dino.x + dino.width > obs.x &&
            dino.y < obs.y + obs.height &&
            dino.y + dino.height > obs.y) {
          gameOver = true;
          ctx.fillStyle = '#000';
          ctx.font = '30px Arial';
          ctx.fillText('GAME OVER', 300, 100);
          ctx.fillText('Press SPACE to restart', 250, 140);
        }
      });
    }

    function jump() {
      if (!dino.jumping && !gameOver) {
        dino.jumping = true;
        dino.velocity = -12;
      } else if (gameOver) {
        // Trigger React state to restart useEffect
        setGameRestart(prev => prev + 1);
      }
    }

    function handleKeyPress(e) {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        jump();
      }
    }

    function handleClick() {
      jump();
    }

    window.addEventListener('keydown', handleKeyPress);
    canvas.addEventListener('click', handleClick);

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      canvas.removeEventListener('click', handleClick);
    };
  }, [gameRestart]); // dependency triggers restart

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <button onClick={onExit} style={{ marginBottom: '20px', padding: '10px 20px' }}>
        ← Back to App
      </button>
      <canvas 
        ref={canvasRef} 
        style={{ border: '2px solid #000', background: '#fff' }}
      />
      <p style={{ marginTop: '10px' }}>Press SPACE or click to jump!</p>
    </div>
  );
};

export default DinoGame;
