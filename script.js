'use strict'
const gameBoard = (() => {
  const board = ['','','','','','','','',''];
  const gen = () => {
    let a = 0;
    for (let i = 0; i < board.length; i++) {
    let i = document.createElement('div');
    i.id = a;
    a++;
    document.getElementById('gameboard').appendChild(i);
    }
  };
  gen();
  return {
    board,
    gen
  };
})();

const displayController = (() => {
  let go = false;
  const score = {};
  let playerTurn = 'O';
  const actions = () => {
    document.getElementById('gameboard').addEventListener('click', (e) => {
      if (go == false) {
        return;
      } else {
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
    }})
  };
  actions();
  const gameOver = (winner) => {
    if ((gameBoard.board[0] == 'X' && gameBoard.board[1] == 'X' && gameBoard.board[2] == 'X') || (gameBoard.board[3] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[5] == 'X') || (gameBoard.board[6] == 'X' && gameBoard.board[7] == 'X' && gameBoard.board[8] == 'X') || (gameBoard.board[0] == 'X' && gameBoard.board[3] == 'X' && gameBoard.board[6] == 'X') || (gameBoard.board[1] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[7] == 'X') || (gameBoard.board[2] == 'X' && gameBoard.board[5] == 'X' && gameBoard.board[8] == 'X') || (gameBoard.board[0] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[8] == 'X') || (gameBoard.board[2] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[6] == 'X')) {
      alert(`${players.player1Name.value} wins! Congratulations!`);
      for (let u = 0; u < gameBoard.board.length; u++) {
        if (gameBoard.board[u] == '') {
          document.getElementById(`${u}`).innerHTML = ' ';
        }
      }
    } else if ((gameBoard.board[0] == 'O' && gameBoard.board[1] == 'O' && gameBoard.board[2] == 'O') || (gameBoard.board[3] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[5] == 'O') || (gameBoard.board[6] == 'O' && gameBoard.board[7] == 'O' && gameBoard.board[8] == 'O') || (gameBoard.board[0] == 'O' && gameBoard.board[3] == 'O' && gameBoard.board[6] == 'O') || (gameBoard.board[1] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[7] == 'O') || (gameBoard.board[2] == 'O' && gameBoard.board[5] == 'O' && gameBoard.board[8] == 'O') || (gameBoard.board[0] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[8] == 'O') || (gameBoard.board[2] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[6] == 'O')) {
      alert(`${players.player2Name.value} wins! Congratulations`);
      for (let u = 0; u < gameBoard.board.length; u++) {
        if (gameBoard.board[u] == '') {
          document.getElementById(`${u}`).innerHTML = ' ';
        }
      }
    } else if (gameBoard.board.every(i => (i != ''))) {
      alert('Tie game!');
    }
  };
  const startReset = document.getElementById('startReset')
  startReset.addEventListener('click', (refresh) => {
    go = true;
    document.getElementById('gameboard').remove();
    let createDiv = document.createElement('div');
    createDiv.id = 'gameboard';
    document.body.appendChild(createDiv);
    gameBoard.gen();
    gameBoard.board = ['','','','','','','','',''];
    actions();
  });
  return {
    score
  };
})();

const players = (() => {
  let player1Name = document.getElementById('player1');
  let player2Name = document.getElementById('player2')
  return {
    player1Name,
    player2Name
  };
})();