//board
let blockSize = 25,
  rows = 23,
  cols = 23,
  c,
  ctx,
  gameOver = false,
  activePlayer = 0;
rocket1 = [11, 20];
rocket2 = [11, 2];

window.onload = function () {
  c = document.getElementById("canvas");
  c.height = rows * blockSize;
  c.width = cols * blockSize;
  ctx = c.getContext("2d"); //used for drawing on the board

  document.addEventListener("keyup", changeDirection);
  // update();
  setInterval(update, 1000 / 10); //100 milliseconds
};

function update() {
  if (gameOver) {
    return;
  }
  // screen
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "black";
  ctx.fillRect(
    1 * blockSize,
    1 * blockSize,
    c.width - 2 * blockSize,
    c.height - 2 * blockSize
  );

  // rocket1
  ctx.fillStyle = "white";
  ctx.fillRect(
    rocket1[0] * blockSize,
    rocket1[1] * blockSize,
    blockSize,
    blockSize
  );

  // rocket2
  ctx.fillStyle = "white";
  ctx.fillRect(
    rocket2[0] * blockSize - 2 *,
    rocket2[1] * blockSize,
    blockSize,
    blockSize
  );

  //game over conditions
}

function changeDirection(e) {}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
