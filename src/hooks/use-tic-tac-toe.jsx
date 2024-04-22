import { useState } from "react";
const initialBoard = ()=> Array(9).fill(null);

const useTictacToe = () => {
    const [board, setBoard] = useState(initialBoard());
    const [isXNext, setIsXNext] = useState(true);
  
    const win_patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    const winning_calculator = (currentBoard) => {
      for (let i = 0; i < win_patterns
.length; i++) {
        const [a, b, c] = win_patterns[i];
        if (
          currentBoard[a] &&
          currentBoard[a] === currentBoard[b] &&
          currentBoard[a] === currentBoard[c]
        ) {
          return currentBoard[a];
        }
      }
  
      return null;
    };
  
    const handleClick = (index) => {
      // check winner
      const winner = winning_calculator(board);
      if (winner || board[index]) return;
  
      const newBoard = [...board];
      newBoard[index] = isXNext ? "X" : "O";
      setBoard(newBoard);
      setIsXNext(!isXNext);
    };
  
    const getStatusMsg = () => {
      const winner = winning_calculator(board);
      if (winner) return `Player ${winner} wins!`;
      if (!board.includes(null)) return `It's a draw!`;
      return `Player ${isXNext ? "X" : "O"} turn`;
    };
  
    const resetGame = () => {
      setBoard(initialBoard());
      setIsXNext(true);
    };
  
    return {board, handleClick, winning_calculator
, getStatusMsg, resetGame};
  };
  
  export default useTictacToe;