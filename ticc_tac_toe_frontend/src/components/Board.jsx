import React from 'react';
import Square from './Square';

/**
 * PUBLIC_INTERFACE
 * Board component renders a 3x3 grid of Square components.
 * Props:
 * - board: Array(9) of 'X' | 'O' | null
 * - onSquareClick: (index: number) => void
 * - gameOver: boolean to disable further interaction
 */
export default function Board({ board, onSquareClick, gameOver }) {
  return (
    <div className="ttt-board" role="grid" aria-label="Tic Tac Toe Board">
      {[0, 1, 2].map((row) => (
        <div className="ttt-row" role="row" key={`row-${row}`}>
          {[0, 1, 2].map((col) => {
            const idx = row * 3 + col;
            const val = board[idx];
            return (
              <Square
                key={idx}
                index={idx}
                value={val}
                onClick={() => onSquareClick(idx)}
                disabled={gameOver || val !== null}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
