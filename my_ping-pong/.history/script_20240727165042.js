//////////////////////////////////////
///           Variables           ////
//////////////////////////////////////
let blockSize = 25,
  rows = 23,
  cols = 23,
  c,
  ctx,
  gameOver = false,
  activePlayer = 0,
  rocket0 = [11, 20],
  rocket1 = [11, 2],
  ball = [11, 11],
  // accept odd numbers
  rocketWidth = 5,
  ballSpeedX = 0,
  ballSpeedY = 1,
  speeds = [1, -1],
  scores = [0, 0];

let rocketHalfWidth = (rocketWidth - 1) / 2;
let ballFrameRate = 5;

//////////////////////////////////////
///         Utility function       ////
//////////////////////////////////////

function changeActivePlayer() {
  activePlayer = activePlayer ? 0 : 1;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomSpeed() {
  return speeds[Math.floor(Math.random() * speeds.length)];
}
function increaseFrameRate() {
  let sum = 0;
  sum += 0.3;
  ballFrameRate += sum / 100;
  console.log(ballFrameRate);
}

//////////////////////////////////////
///         listen function       ////
//////////////////////////////////////

function changeDirection(e) {
  // check key
  if (e.code == "ArrowRight") {
    // check edges
    if (rocket0[0] >= cols - 2 - rocketHalfWidth) return;

    // check active player
    if (activePlayer === 0) {
      rocket0[0] += 1;
    } else if (activePlayer === 1) {
      rocket1[0] += 1;
    }
  } else if (e.code == "ArrowLeft") {
    if (rocket0[0] <= 1 + rocketHalfWidth) return;

    if (activePlayer === 0) {
      rocket0[0] -= 1;
    } else if (activePlayer === 1) {
      rocket1[0] -= 1;
    }
  }
}

//////////////////////////////////////
///         main function       ////
//////////////////////////////////////
function moveBall() {
  ball[0] += ballSpeedX;
  ball[1] += ballSpeedY;
}

function update() {
  if (gameOver) {
    return;
  }
  // screen
  ctx.fillStyle = "#aaa";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "black";
  ctx.fillRect(
    1 * blockSize,
    1 * blockSize,
    c.width - 2 * blockSize,
    c.height - 2 * blockSize
  );

  // rocket1
  ctx.fillStyle = "red";
  ctx.fillRect(
    rocket0[0] * blockSize - rocketHalfWidth * blockSize,
    rocket0[1] * blockSize,
    blockSize * rocketWidth,
    blockSize
  );

  // rocket2
  ctx.fillStyle = "green";
  ctx.fillRect(
    rocket1[0] * blockSize - rocketHalfWidth * blockSize,
    rocket1[1] * blockSize,
    blockSize * rocketWidth,
    blockSize
  );

  // ball
  ctx.fillStyle = "cyan";
  ctx.fillRect(ball[0] * blockSize, ball[1] * blockSize, blockSize, blockSize);

  // hit right wall
  if (ball[0] == 1) {
    ballSpeedX = 1;
  }

  // hit left wall
  if (ball[0] == cols - 2) {
    ballSpeedX = -1;
  }

  // hit top wall

  // hit bottom wall

  // hit rocket
  for (let i = 0; i < rocketWidth; i++) {

    
    if (ball[0] == rocket0 - rocketHalfWidth + i || ball[1] === 19) {
      ballSpeedY = -1;
      ballSpeedX = getRandomSpeed();
      increaseFrameRate();
    }

    if (ball[0] == rocket0 - rocketHalfWidth + i || ball[1] === 3) {
      ballSpeedY = 1;
      ballSpeedX = getRandomSpeed();
      increaseFrameRate();
    }
  }

  //game over conditions
}

function init() {
  c = document.getElementById("canvas");
  c.height = rows * blockSize;
  c.width = cols * blockSize;
  ctx = c.getContext("2d"); //used for drawing on the board

  document.addEventListener("keyup", changeDirection);
  // update();
  setInterval(update, 1000 / 100); //100 milliseconds
  setInterval(moveBall, 1000 / ballFrameRate); //100 milliseconds
}
init();
