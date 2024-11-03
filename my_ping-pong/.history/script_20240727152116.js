//board
let blockSize = 25,
  rows = 23,
  cols = 23,
  c,
  ctx,
  gameOver = false,
  activePlayer = 0,
  rocket0 = [11, 20],
  rocket1 = [11, 2];

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
    rocket0[0] * blockSize - 2 * blockSize,
    rocket0[1] * blockSize,
    blockSize * 5,
    blockSize
  );

  // rocket2
  ctx.fillStyle = "white";
  ctx.fillRect(
    rocket1[0] * blockSize - 2 * blockSize,
    rocket1[1] * blockSize,
    blockSize * 5,
    blockSize
  );

  //game over conditions
}

function changeDirection(e) {
  if (e.code == "ArrowRight") {
    if (activePlayer === 0) {
      rocket0[0] += 1;
    } else if (activePlayer === 1) {
    }
  } else if (e.code == "ArrowLeft") {
    console.log("left");
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
