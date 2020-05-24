document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let squaresArray = Array.from(document.querySelectorAll('.grid div'));
  let squares = document.querySelectorAll('.grid div');
  const scoreDisplay = document.querySelector('#score');
  const startButton = document.querySelector('#startButton');

  // Tetrominoes
  const lTetromino = [
    [1, 11, 21, 2],
    [10, 11, 12, 22],
    [1, 11, 21, 20],
    [10, 20, 21, 22],
  ];

  const zTetromino = [
    [0, 10, 11, 21],
    [11, 12, 20, 21],
    [0, 10, 11, 21],
    [11, 12, 20, 21],
  ];

  const tTetromino = [
    [1, 10, 11, 12],
    [1, 11, 12, 21],
    [10, 11, 12, 21],
    [1, 10, 11, 21],
  ];

  const oTetromino = [
    [0, 1, 10, 11],
    [0, 1, 10, 11],
    [0, 1, 10, 11],
    [0, 1, 10, 11],
  ];

  const iTetromino = [
    [1, 11, 21, 31],
    [10, 11, 12, 13],
    [1, 11, 21, 31],
    [10, 11, 12, 13],
  ];

  const theTetrominoes = [
    lTetromino,
    zTetromino,
    tTetromino,
    oTetromino,
    iTetromino,
  ];

  let currentPosition = 4;
  let currentRotation = 0;

  // Randomly select tetromino
  let nextTetromino = Math.floor(Math.random() * theTetrominoes.length);
  let current = theTetrominoes[nextTetromino][currentRotation];

  draw = () => {
    current.forEach((shape) => {
      squares[currentPosition + shape].classList.add('tetromino');
    });
  };

  unDraw = () => {
    current.forEach((shape) => {
      squares[current + shape].classList.remove('tetromino');
    });
  };
});
