const grid = ["", "", "", "", "", "", "", "", ""];

const box0El = document.querySelector(".box-0");
const box1El = document.querySelector(".box-1");
const box2El = document.querySelector(".box-2");
const box3El = document.querySelector(".box-3");
const box4El = document.querySelector(".box-4");
const box5El = document.querySelector(".box-5");
const box6El = document.querySelector(".box-6");
const box7El = document.querySelector(".box-7");
const box8El = document.querySelector(".box-8");

function isWritten(e) {
  if (e === "o" || e === "x") {
    return 1;
  } else {
    return 0;
  }
}

function changeState(e) {
  let item = grid[e.target.dataset.num] 
  if( 
}

function init() {
  for (let i = 0; i < grid.length; i++) {
      document.querySelector(`.box-${i}`).addEventListener("click", (e) => changeState(e))
  }
}
init()