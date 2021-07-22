// Initial Data
let board = {
  a1: '',
  a2: '',
  a3: '',
  b1: '',
  b2: '',
  b3: '',
  c1: '',
  c2: '',
  c3: ''
};
let player = '';
let warning = '';
let isPlaying = false;

reset();

// Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach((item) => {
  item.addEventListener('click', itemClick);
});

// Functions
function itemClick(event) {
  let item = event.target.getAttribute('data-item');
  if (board[item === '']) {
    board[item] = player;
    renderBoard();
    togglePlayer();
  }
};

function togglePlayer() {
  player = (player === 'x') ? 'o' : 'x';
  renderInfo();
}

function reset() {
  warning = '';
  let random = Math.floor(Math.random() * 2);
  player = (random === 0) ? 'o' : 'x';

  for (let i in board) {
    board[i] = '';
  }

  isPlaying = true;

  renderBoard();
  renderInfo();
};

function renderBoard() {
  for (let i in board) {
    let item = document.querySelector(`div[data-item=${i}]`);
    item.innerHTML = board[i];
  }
}

function renderInfo() {
  document.querySelector('.turn').innerHTML = player;
  document.querySelector('.result').innerHTML = warning;
}
