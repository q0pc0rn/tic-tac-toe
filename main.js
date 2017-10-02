var x = 0;
var o = 0;
var winnerX = 0;
var winnerO = 0;
var winner = null;
<<<<<<< HEAD
var top, left, right, bot, centr;
=======

>>>>>>> b3428060a5891970c6eb9913582d9fbf4ffbde05
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
<<<<<<< HEAD
  (o >= 3) ? ggwp() : null;
=======
  ((x === 3) || (o === 3)) ? ggwp() : null;
  console.log( winnerX, winnerO, x, o);
>>>>>>> b3428060a5891970c6eb9913582d9fbf4ffbde05
  console.log(winner);
}

function ggwp() {
  winner = (winnerO === 6) ? 'o winner' : (winnerX === 6) ? 'x winner' : null;
  (winner != null) ? alert('gg wp '+ winner) : null;
<<<<<<< HEAD
}





function randomName() {
  action: console.log('11');
  delee: console.log('123123');
  adding: console.log('ssd');
}

function qweasd(event) {
  randomName(delee);
=======
>>>>>>> b3428060a5891970c6eb9913582d9fbf4ffbde05
}
