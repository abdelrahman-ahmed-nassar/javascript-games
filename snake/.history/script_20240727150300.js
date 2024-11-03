//board
let blockSize = 25,
  rows = 20,
  cols = 20,
  c,
  ctx,
  gameOver = false;

window.onload = function () {
  c = document.getElementById("canvas");
  c.height = rows * blockSize;
  c.width = cols * blockSize;
  ctx = c.getContext("2d"); //used for drawing on the board

  document.addEventListener("keyup", changeDirection);
  setInterval(update, 1000 / 10); 
};

function update() {
  if (gameOver) {
    return;
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, c.width, c.height);


  //game over conditions
}

function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function placeFood() {
  foodX = randomIntFromInterval(1, cols - 1) * blockSize;
  foodY = randomIntFromInterval(1, rows - 1) * blockSize;
}
