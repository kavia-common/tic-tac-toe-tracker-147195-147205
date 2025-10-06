import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import './index.css';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import { checkDraw, checkWinner } from './utils/gameLogic';

// PUBLIC_INTERFACE
function App() {
  /** Main Tic-Tac-Toe application.
   * Manages game state, scores, and renders board and controls.
   */

  // Theme support (light-only by default but accessible for future toggle)
  const [theme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const initialBoard = useMemo(() => Array(9).fill(null), []);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null); // 'X' | 'O' | null
  const [isDraw, setIsDraw] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0, Draws: 0 });

  const gameOver = Boolean(winner) || isDraw;

  // PUBLIC_INTERFACE
  const handleSquareClick = (index) => {
    /** Handles a user clicking a square, updating board and state.
     * Ignores clicks if game is over or square already set.
     */
    if (gameOver || board[index]) return;

    const next = [...board];
    next[index] = isXNext ? 'X' : 'O';

    const newWinner = checkWinner(next);
    const newIsDraw = checkDraw(next, newWinner);

    setBoard(next);
    setIsXNext((prev) => !prev);
    setWinner(newWinner);
    setIsDraw(newIsDraw);

    if (newWinner) {
      setScores((s) => ({ ...s, [newWinner]: s[newWinner] + 1 }));
    } else if (newIsDraw) {
      setScores((s) => ({ ...s, Draws: s.Draws + 1 }));
    }
  };

  // PUBLIC_INTERFACE
  const resetRound = () => {
    /** Clears board and round result, keeps scores. */
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsDraw(false);
  };

  // PUBLIC_INTERFACE
  const resetScores = () => {
    /** Clears scores and resets round. */
    setScores({ X: 0, O: 0, Draws: 0 });
    resetRound();
  };

  const statusText = winner
    ? `Winner: ${winner}`
    : isDraw
      ? 'Draw!'
      : `Next: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="ocean-app">
      <header className="ocean-header">
        <h1 className="app-title">Tic-Tac-Toe</h1>
        <p className="app-subtitle">Ocean Professional Edition</p>
      </header>

      <main className="ocean-main">
        <section className="game-panel">
          <div className="status" aria-live="polite" aria-atomic="true">
            {statusText}
          </div>

          <Board board={board} onSquareClick={handleSquareClick} gameOver={gameOver} />

          <div className="controls">
            <button
              type="button"
              className="btn reset-round"
              onClick={resetRound}
              aria-label="Reset current round"
            >
              Reset Round
            </button>
          </div>
        </section>

        <aside className="side-panel">
          <Scoreboard scores={scores} onResetScores={resetScores} />
        </aside>
      </main>

      <footer className="ocean-footer">
        <small>Built with React • Accessible and theme-friendly</small>
      </footer>
    </div>
  );
}

export default App;
