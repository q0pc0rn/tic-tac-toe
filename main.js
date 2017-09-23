var x = 0;
var o = 0;
var winnerX = 0;
var winnerO = 0;
var winner = null;

function clickers(event) {
  let swipe = {
    target: event.target || event.srcElement
  };
  let field;
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
  ((x === 3) || (o === 3)) ? ggwp() : null;
  console.log( winnerX, winnerO, x, o);
  console.log(winner);
}

function ggwp() {
  winner = (winnerO === 6) ? 'o winner' : (winnerX === 6) ? 'x winner' : null;
  (winner != null) ? alert('gg wp '+ winner) : null;
}
