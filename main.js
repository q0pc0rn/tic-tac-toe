var x = 0;
var o = 0;
var winnerX = 0;
var winnerO = 0;
var winner = null;
var top, left, right, bot, centr;


function clickers(event) {
  let swipe = {
    target: event.target || event.srcElement
  };
  if (swipe.target.classList.length === 1) {
    if (x <= o) {
      swipe.target.classList.add("x");
      x++;
      winnerX += +swipe.target.value;
    } else {
      swipe.target.classList.add("o");
      o++;
      winnerO += +swipe.target.value;
    }
  };
  console.log( winnerX, winnerO, x, o);
  console.log(winner);
}
