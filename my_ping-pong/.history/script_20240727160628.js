//board
let blockSize = 25,
  rows = 23,
  cols = 23,
  c,
  ctx,
  gameOver = false,
  activePlayer = 0,
  rocket0 = [11, 20],
  rocket1 = [11, 2],
  ball = [11, 11];
// accept odd numbers
rocketWidth = 9;
ballSpeedX = 0;
ballSpeedY = 0;
speeds = [1, -1];

function changeActivePlayer() {
  activePlayer = activePlayer ? 0 : 1;
}

window.onload = function () {
  c = document.getElementById("canvas");
  c.height = rows * blockSize;
  c.width = cols * blockSize;
  ctx = c.getContext("2d"); //used for drawing on the board

  document.addEventListener("keyup", changeDirection);
  // update();
  setInterval(update, 1000 / 100); //100 milliseconds
};
