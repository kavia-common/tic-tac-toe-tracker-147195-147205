import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Square component represents a single cell in the Tic-Tac-Toe grid.
 * Props:
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - disabled: boolean - disables interaction when true
 * - index: number - position for aria-label
 */
export default function Square({ value, onClick, disabled, index }) {
  const label = value
    ? `Square ${index + 1}, ${value}`
    : `Square ${index + 1}, empty`;

  return (
    <button
      type="button"
      className="ttt-square"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {value}
    </button>
  );
}
