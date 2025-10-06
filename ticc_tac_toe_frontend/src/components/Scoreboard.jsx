import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Scoreboard displays the number of wins and draws.
 * Props:
 * - scores: { X: number; O: number; Draws: number }
 * - onResetScores?: () => void (optional)
 */
export default function Scoreboard({ scores, onResetScores }) {
  return (
    <div className="scoreboard" aria-label="Scoreboard">
      <div className="score">
        <span className="score-label">X Wins</span>
        <span className="score-value" aria-label={`X Wins: ${scores.X}`}>{scores.X}</span>
      </div>
      <div className="score">
        <span className="score-label">O Wins</span>
        <span className="score-value" aria-label={`O Wins: ${scores.O}`}>{scores.O}</span>
      </div>
      <div className="score">
        <span className="score-label">Draws</span>
        <span className="score-value" aria-label={`Draws: ${scores.Draws}`}>{scores.Draws}</span>
      </div>
      {onResetScores && (
        <button
          type="button"
          className="btn reset-scores"
          onClick={onResetScores}
          aria-label="Reset scores"
        >
          Reset Scores
        </button>
      )}
    </div>
  );
}
