let squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

function handleClick(e) {
  if (e.target.innerHTML !== '') {
    return;
  }
  e.target.innerHTML = currentPlayer;
  checkForWin();
  currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  computerTurn();
}

function checkForWin() {
  let winningCombos = [    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    if (squares[combo[0]].innerHTML === currentPlayer && squares[combo[1]].innerHTML === currentPlayer && squares[combo[2]].innerHTML === currentPlayer) {
      alert(currentPlayer + ' wins!');
      resetBoard();
    }
  }
}

function resetBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }
}

function computerTurn() {
  let availableSquares = [];
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML === '') {
      availableSquares.push(i);
    }
  }
  if (availableSquares.length === 0) {
    alert('Tie game!');
    resetBoard();
    return;
  }
  let randomIndex = Math.floor(Math.random() * availableSquares.length);
  let computerChoice = availableSquares[randomIndex];
  squares[computerChoice].innerHTML = currentPlayer;
  checkForWin();
  currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', handleClick);
}

document.getElementById('newGame').addEventListener('click', resetBoard);
