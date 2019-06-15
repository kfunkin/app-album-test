var cover = document.getElementById('cover');
var middle1 = document.getElementById('middle1');
/*NEED TO ADD 'MIDDLE2' AND 'BACK'*/
var startingX;

function coverhandleTouchStart(evt) {
  startingX = evt.touches[0].clientX;
  evt.preventDefault();
};

function coverhandleTouchMove(evt) {
  var touch = evt.touches[0];
  var change = startingX - touch.clientX;

  if (change < 0) {
    return;
  }

  cover.style.left = '-' + change + 'px';
  middle1.style.display = 'block';
  middle1.style.left = (screen.width - change) + 'px';
  evt.preventDefault();
};

function coverhandleTouchEnd(evt) {
  var change = startingX - evt.changedTouches[0].clientX;
  var threshold = screen.width / 3;
  if (change < threshold) {
    cover.style.left = 0;
    middle1.style.left = '100%';
    middle1.style.display = 'none';
  } else {
    cover.style.transition = 'all .3s';
    middle1.style.transition = 'all .3s';
    cover.style.left = '100%';
    //cover.style.display = 'none';
    middle1.style.left = '0';
    middle1.style.display = 'block';
  }
};

function middle1handleTouchStart(evt) {
  startingX = evt.touches [0].clientX;
  cover.style.transition = '';
  middle1.style.transition = '';
  cover.style.display = 'none';
  evt.preventDefault();
};

function middle1handleTouchMove(evt) {
  var touch = evt.touches[0];
  var change = touch.clientX - startingX;
  if (change < 0) {
    return;
  }
  cover.style.display = 'block';
  cover.style.left = (change - screen.width) + 'px';
  middle1.style.left = change + 'px';
  evt.preventDefault();
};

function middle1handleTouchEnd(evt) {
  var change = evt.changedTouches [0].clientX - startingX;
  var half = screen.width / 4;
  if (change < half) {
    cover.style.left = '-100%';
    cover.style.display = 'none';
    middle1.style.left = '0';
  } else {
    cover.style.transition = 'all .3s';
    middle1.style.transition = 'all .3s';
    cover.style.left = '0';
    middle1.style.left = '100%';
  }
};
