'use strict'
const gameBoard = (() => {
  const board = ['','','','','','','','',''];
  const genBoard = document.getElementById('gameboard');
  let a = 0;
  for (let i = 0; i < board.length; i++) {
  let i = document.createElement('div');
  i.id = a;
  a++;
  genBoard.appendChild(i);
  }

  return {
    board
  };

})();

const displayController = (() => {
  const score = {};
  let playerTurn = 'O';
  const displayBoard = document.getElementById('gameboard');
  
  displayBoard.addEventListener('click', (e) => {
    if (playerTurn == 'X') {
      if (e.target.innerHTML == '') {
        e.target.innerHTML = 'X';
        gameBoard.board[e.target.id] = 'X';
        gameOver(playerTurn);
        playerTurn = 'O';
      } else {
        return;
      }
    } else {
      if (e.target.innerHTML == '') {
        e.target.innerHTML = 'O';
        gameBoard.board[e.target.id] = 'O';
        gameOver(playerTurn);
        playerTurn = 'X';
      } else {
        return;
      }
    }
  });

  const gameOver = (winner) => {
    if ((gameBoard.board[0] == 'X' && gameBoard.board[1] == 'X' && gameBoard.board[2] == 'X') || (gameBoard.board[3] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[5] == 'X') || (gameBoard.board[6] == 'X' && gameBoard.board[7] == 'X' && gameBoard.board[8] == 'X') || (gameBoard.board[0] == 'X' && gameBoard.board[3] == 'X' && gameBoard.board[6] == 'X') || (gameBoard.board[1] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[7] == 'X') || (gameBoard.board[2] == 'X' && gameBoard.board[5] == 'X' && gameBoard.board[8] == 'X') || (gameBoard.board[0] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[8] == 'X') || (gameBoard.board[2] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[6] == 'X')) {
      alert('X player wins!');
    } else if ((gameBoard.board[0] == 'O' && gameBoard.board[1] == 'O' && gameBoard.board[2] == 'O') || (gameBoard.board[3] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[5] == 'O') || (gameBoard.board[6] == 'O' && gameBoard.board[7] == 'O' && gameBoard.board[8] == 'O') || (gameBoard.board[0] == 'O' && gameBoard.board[3] == 'O' && gameBoard.board[6] == 'O') || (gameBoard.board[1] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[7] == 'O') || (gameBoard.board[2] == 'O' && gameBoard.board[5] == 'O' && gameBoard.board[8] == 'O') || (gameBoard.board[0] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[8] == 'O') || (gameBoard.board[2] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[6] == 'O')) {
      alert('O player wins!');
    } else if (gameBoard.board.every(i => (i != ''))) {
      alert('Tie game!');
    }
  };

  return {
    score
  };
})();

const players = (name) => {
  return { name };
};