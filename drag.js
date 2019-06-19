var blackSquare = document.querySelector("#black-square");
var blueSquare = document.querySelector("#blue-square");
var dragContainer = document.querySelector(".drag-container");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

dragContainer.addEventListener("touchstart", dragStart, false);
dragContainer.addEventListener("touchend", dragEnd, false);
dragContainer.addEventListener("touchmove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }
  if (e.target === blackSquare) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialX = currentY;

  active = false;
}

function drag(e) {
  if (active) {

    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, blackSquare);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " +yPos +"px, 0)";
}
