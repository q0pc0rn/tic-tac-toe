var x = 0;
var o = 0;
var winnnerX = 0;
var winnerO = 0;

function clickers(event) {
  let swipe = {
    target: event.target || event.srcElement
  };
  let field;
  if (swipe.target.classList.length === 1) {
    if (x <= o) {
      swipe.target.classList.add("x");
      x++;
      pushingX.push(swipe.target.id);
    } else {
      swipe.target.classList.add("o");
      o++;
      pushingO.push(swipe.target.id);
    }
  };
  console.log(swipe.target.id);
}
