const gameBoard = (() => {
  const board = ['','','','','','','','',''];
  playerTurn = 'x';
  const displayBoard = document.getElementById('gameboard');
  let a = 0;
  for (let i = 0; i < board.length; i++) {
  let i = document.createElement('div');
  i.id = 'a';
  i.innerHTML = board[a];
  a++;
  displayBoard.appendChild(i);
  }

  const addPiece = document.getElementById('a');
  displayBoard.addEventListener('click', (e) => {
    if (playerTurn == 'x') {
      if (e.target.innerHTML == '') {
        e.target.innerHTML = 'x';
        playerTurn = 'o';
      } else {
        return;
      }
    } else {
      if (e.target.innerHTML == '') {
        e.target.innerHTML = 'o';
        playerTurn = 'x';
      } else {
        return;
      }
    }
  });

  return {
    board
  };

})();

const displayController = (() => {
  const score = {};
  return {
    score
  };
})();

const players = (name) => {
  return { name };
};