function openNav() {
  document.getElementById("albumNav").style.width = "250px";
  document.getElementById("albumNav").style.opacity = "0.9";
}

function closeNav() {
  document.getElementById("albumNav").style.width = "0px";
}

/*var el = document.querySelector('div.pinch-zoom');
new PinchZoom.default(el, {
  lockDragAxis: false,
  draggableUnzoomed: true,
  setOffsetsOnce: false,
  verticalPadding: 0.5,
  horizontalPadding: 0.5,
  tapZoomFactor: 4,
});*/


/*new window.PinchZoom.default(document.querySelector('.pinch-zoom'), {
  draggableUnzoomed: true, lockDragAxis: false,
});*/

//*****AUDIO PLAYER ACTIVATION*****

let aBtn = document.querySelector("#audio-btn");
let aPlayer = document.querySelector("#player");
let ctrls = document.querySelector(".controllers");
let playerStatus = false;

aBtn.addEventListener("click", function() {
    if(playerStatus === false) {
      aPlayer.style.height = "250px";
      aPlayer.style.opacity = "0.7";
      ctrls.style.visibility = "visible";
      aBtn.style.animation = "audio-btn-anim 0.2s linear";
      aBtn.style.animationFillMode="forwards";
      playerStatus = true;
    }
    else if(playerStatus == true) {
      aPlayer.style.height = "0px";
      aPlayer.style.opacity = "0";
      ctrls.style.visibility = "hidden";
      aBtn.style.animation = "audio-btn-anim-reverse 0.2s linear";
      aBtn.style.animationFillMode="forwards";
      playerStatus = false;
    }
  });

//*****AUDIO PLAYER CONTROLS*****

var songs = ["Don't Ever.mp3",
            "Queen Of Soul 2019.mp3",
            "2019BalticEdit1.mp3",
            "Damn Gulls.mp3",
            "Scuba.mp3"];

var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
//var volumeSlider = document.getElementById('volumeSlider');
var nextSongTitle = document.getElementById('nextSong');

var song = new Audio();
var currentSong = 0;

window.onload = loadSong;

function loadSong () {
  song.src = "assets/" + songs[currentSong];
  songTitle.textContent = (currentSong + 1) + ". " + songs[currentSong];
  //nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[currentSong + 1 % songs.length];
  /*song.volume = volumeSlider.value;*/
  song.play();
  setTimeout(showDuration, 1000);
}

setInterval(updateSongSlider, 100);

function updateSongSlider () {
  var c = Math.round(song.currentTime);
  songSlider.value = c;
  currentTime.textContent = c;
  if(song.ended) {
    next();
  }
}

function convertTime (secs) {
  var min = Math.floor(secs/60);
  var sec = secs % 60;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;
  return (min + ":" + sec);
}

function showDuration () {
  var d = Math.floor(song.duration);
  songSlider.setAttribute("max", d);
  duration.textContent = convertTime(d);
}

function playOrPauseSong(img) {
  if(song.paused){
    song.play();
    img.src = "assets/pause.svg";
  }else {
    song.pause();
    img.src = "assets/play.svg";
  }
}

function next() {
  currentSong = currentSong + 1 % songs.length;
  loadSong();
}

function previous() {
  currentSong--;
  currentSong = (currentSong < 0) ? songs.length -1 : currentSong;
  loadSong();
}

function seekSong() {
  song.currentTime = songSlider.value;
  currentTime.textContent = convertTime(song.currentTime);
}

/*function adjustVolume() {
  song.volume = volumeSlider.value;
}*/
