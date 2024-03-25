//When image loads, console logs "Image loaded!"

const image = document.querySelector("img");

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

//When audio is played, console logs "Playing"

const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});

//When audio ends, console logs "Ended"

audio.addEventListener("ended", function (event) {
  console.log("Ended", event);
});

//When audio is paused, console logs "Paused"

audio.addEventListener("pause", function (event) {
  console.log("Paused", event);
});

//When video

const video = document.querySelector("video");

video.addEventListener("time", function (event) {
  console.log("Time event:", event);
});

//When video ends, console logs "Ended"

video.addEventListener("ended", function (event) {
  console.log("Video ended", event);
});

//Whe video is paused, console logs "Paused"

video.addEventListener("pause", function (event) {
  console.log("Video paused", event);
});

//audio buttons

const playbtn = document.getElementById("playbtn");

playbtn.addEventListener("click", function (event) {
  audio.play();
});

const pausebtn = document.getElementById("pausebtn");

pausebtn.addEventListener("click", function (event) {
  audio.pause();
});

const stopbtn = document.getElementById("stopbtn");

stopbtn.addEventListener("click", function (event) {
  audio.pause();
  audio.currentTime = 0;
});

//audio slider

const slider = document.querySelector("input");

slider.addEventListener("change", function (event) {
  audio.volume = event.target.value;
});
