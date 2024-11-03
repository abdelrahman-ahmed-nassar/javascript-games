let grid = ["", "", "", "", "", "", "", "", ""];

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

let gridSize = 3;
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

function changeBoxState(e) {
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
  for(let i = 0; i < gridSize; i++) {
    let first = ro

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
  grid = ["", "", "", "", "", "", "", "", ""];
  for (let i = 0; i < 9; i++) {
    document.querySelector(`.box-${i}`).style = "pointer-events: all;";
  }
  updateGrid(-1);
});
