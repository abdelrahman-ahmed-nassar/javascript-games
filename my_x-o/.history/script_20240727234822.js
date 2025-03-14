let grid = ["", "", "", "", "", "", "", "", ""];

const containerEl = document.getElementById("container");

const box0El = document.querySelector(".box-0");
const box1El = document.querySelector(".box-1");
const box2El = document.querySelector(".box-2");
const box3El = document.querySelector(".box-3");
const box4El = document.querySelector(".box-4");
const box5El = document.querySelector(".box-5");
const box6El = document.querySelector(".box-6");
const box7El = document.querySelector(".box-7");
const box8El = document.querySelector(".box-8");

const resetBtn = document.getElementById("reset-btn");
const activePlayerEl = document.getElementById("active-player");
const textEl = document.querySelector(".player-text");
const winnerEl = document.querySelector(".player-winner");

let gridSize = 3;
let isPlaying = 1;
let activePlayer = "x";

/////////////////////////

function isWritten(e) {
  if (e === "o" || e === "x") {
    return 1;
  } else {
    return 0;
  }
}

function updateGrid(n) {
  for (let i = 0; i < grid.length; i++) {
    document.querySelector(`.box-${i}`).textContent = grid[i];
  }
  if (n !== -1) {
    document.querySelector(`.box-${n}`).style = "pointer-events: none;";
  }
}

function changeActivePlayer() {
  let code = activePlayer === "x" ? "o" : "x";
  activePlayer = code;
  activePlayerEl.textContent = code;
}

function winner() {
  containerEl.style = "pointer-events: none";
  isPlaying = 0;
  textEl.style = "display: none;";
  winnerEl.style = "display: block;";

  winnerEl.textContent = `Player ${
    activePlayer === "x" ? "o" : "x"
  } is the winner 🎉`;
}

///////////////

function changeBoxState(e) {
  if (!isPlaying) return;
  let n = e.target.dataset.num;
  let item = grid[n];
  if (isWritten(item)) {
    return;
  } else {
    let code = activePlayer === "x" ? "x" : "o";
    grid[n] = code;

    updateGrid(n);

    changeActivePlayer();
  }
  // check for cols

  for (let i = 0; i < gridSize; i++) {
    let firstCol = grid[i];
    let secondCol = grid[i + gridSize];
    let thirdCol = grid[i + 2 * gridSize];

    if (firstCol === "" || secondCol === "" || thirdCol === "") {
      return;
    }

    if (first === second && second === third && first === third) {
      winner();
    }

    if (
      firstCol === secondCol &&
      secondCol === thirdCol &&
      firstCol === thirdCol
    ) {
      winner();
    }
  }

  // check for cols
  for (let i = 0; i < gridSize; i = i + 3) {


    if (first === "" || second === "" || third === "") {
      return;
    }
  }
}

/////////////////////

function init() {
  for (let i = 0; i < grid.length; i++) {
    document
      .querySelector(`.box-${i}`)
      .addEventListener("click", (e) => changeBoxState(e));
  }
}
init();

resetBtn.addEventListener("click", function (e) {
  isPlaying = 1;
  grid = ["", "", "", "", "", "", "", "", ""];
  containerEl.style = "pointer-events: all";
  for (let i = 0; i < 9; i++) {
    document.querySelector(`.box-${i}`).style = "pointer-events: all;";
  }

  textEl.style = "display: block";
  winnerEl.style = "display: none";

  updateGrid(-1);
  init();
});
