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
  generateRandomTetromino = () =>
    Math.floor(Math.random() * theTetrominoes.length);

  let nextTetromino = generateRandomTetromino();
  let currentTetromino = theTetrominoes[nextTetromino][currentRotation];

  draw = () => {
    currentTetromino.forEach((shape) => {
      squares[currentPosition + shape].classList.add('tetromino');
    });
  };

  unDraw = () => {
    currentTetromino.forEach((shape) => {
      squares[currentPosition + shape].classList.remove('tetromino');
    });
  };

  // Make tetromino move down every second
  tiemrId = setInterval(moveDown, 1000);
  function moveDown() {
    unDraw();
    currentPosition += 10;
    draw();
    freeze();
  }

  // Assign keyCodes
  control = (e) => {
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      // rotate();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      // moveDown();
    }
  };

  document.addEventListener('keyup', control);

  freeze = () => {
    if (
      currentTetromino.some((shape) =>
        squares[currentPosition + shape + 10].classList.contains('taken')
      )
    ) {
      currentTetromino.forEach((shape) =>
        squares[currentPosition + shape].classList.add('taken')
      );

      // Next tetromino
      nextTetromino = generateRandomTetromino();
      currentTetromino = theTetrominoes[nextTetromino][currentRotation];
      currentPosition = 4;
      draw();
    }
  };

  moveLeft = () => {
    unDraw();
    const isLeftEdge = currentTetromino.some(
      (index) => (currentPosition + index) % 10 === 0
    );

    if (!isLeftEdge) currentPosition -= 1;
    if (
      currentPosition.some((index) =>
        squares[currentPosition + index].classList.contains('taken')
      )
    ) {
      currentPosition += 1;
    }
    draw();
  };

  moveRight = () => {
    unDraw();
    const isAtRight = currentTetromino.some(
      (index) => (currentPosition + index) % 10 === 10 - 1
    );

    if (!isAtRight) currentPosition += 1;

    if (
      currentTetromino.some((index) =>
        squares[currentPosition + index].classList.contains('taken')
      )
    ) {
      currentPosition -= 1;
    }
    draw();
  };
});
