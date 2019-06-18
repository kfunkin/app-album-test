let cover = document.querySelector('#cover');
let middle = document.querySelector('#middle');
let middle2 = document.querySelector('#middle2');
let back = document.querySelector('#back');



cover.addEventListener("touchstart", startTouch, false);
cover.addEventListener("touchmove", moveTouch, false);
middle.addEventListener("touchstart", startTouch, false);
middle.addEventListener("touchmove", moveTouch, false);
middle2.addEventListener("touchstart", startTouch, false);
middle2.addEventListener("touchmove", moveTouch, false);
back.addEventListener("touchstart", startTouch, false);
back.addEventListener("touchmove", moveTouch, false);
 
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;

};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      console.log("swiped left");

    } else {
      // swiped right
      console.log("swiped right");

    } 
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      console.log("swiped up");
    } else {
      // swiped down
      console.log("swiped down");
    } 
  }
 
  initialX = null;
  //initialY = null;
   
  e.preventDefault();
};
