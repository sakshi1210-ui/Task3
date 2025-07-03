const cells = document.querySelectorAll('[data-cell]');
const restartBtn = document.getElementById('restartBtn');
let isCircleTurn = false;

const WIN_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function startGame() {
  isCircleTurn = false;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
    cell.addEventListener('click', handleClick, { once: true });
  });
}

function handleClick(e) {
  const cell = e.target;
  const current = isCircleTurn ? 'O' : 'X';
  cell.textContent = current;
  cell.classList.add(current.toLowerCase());

  if (checkWin(current)) {
    setTimeout(() => alert(`${current} wins!`), 100);
  } else if (isDraw()) {
    setTimeout(() => alert("Draw!"), 100);
  } else {
    isCircleTurn = !isCircleTurn;
  }
}

function checkWin(player) {
  return WIN_COMBINATIONS.some(combination =>
    combination.every(index =>
      cells[index].textContent === player
    )
  );
}

function isDraw() {
  return [...cells].every(cell => cell.textContent);
}

restartBtn.addEventListener('click', startGame);
startGame();
