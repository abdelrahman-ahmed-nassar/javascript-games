const grid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

const box1El = document.querySelector(".box-1");
const box2El = document.querySelector(".box-2");
const box3El = document.querySelector(".box-3");
const box4El = document.querySelector(".box-4");
const box5El = document.querySelector(".box-5");
const box6El = document.querySelector(".box-6");
const box7El = document.querySelector(".box-7");
const box8El = document.querySelector(".box-8");
const box9El = document.querySelector(".box-9");

function isWritten(e) {
  if(e === "o" || e === "x") {
    return 1;
  }else {
    return 0;
  }
}

function updateGrid() {
  for(let i=0 ; i < grid)
}
