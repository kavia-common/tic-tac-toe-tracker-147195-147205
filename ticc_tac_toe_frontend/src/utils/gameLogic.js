//
// Utility functions for Tic-Tac-Toe gameplay
//

// PUBLIC_INTERFACE
export function checkWinner(board) {
  /** Determine the winner of the current board state.
   * Returns 'X' | 'O' | null
   * board: array of 9 values (null | 'X' | 'O')
   */
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], // diags
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    const va = board[a];
    if (va && va === board[b] && va === board[c]) {
      return va; // 'X' or 'O'
    }
  }
  return null;
}

// PUBLIC_INTERFACE
export function checkDraw(board, winner) {
  /** Determine if the board is a draw state.
   * Returns boolean
   * A draw occurs when there is no winner and all squares are filled.
   */
  if (winner) return false;
  return board.every((sq) => sq !== null);
}
