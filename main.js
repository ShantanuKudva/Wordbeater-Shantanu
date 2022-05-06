"use strict";

//startMatch funtion
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    score++;
    document.querySelector(".form-input input").value = "";
    showWord(words);
    time = currentlevel + 1;
  } else {
    isPlaying = false;
  }
  scoreDisplay.innerHTML = score;
  //if score shown is -1, we'll display it as 0 and then the actual game starts
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  }
}

//match words
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!🎉";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}
//globals

//available levels
const levels = {
  easy: 7,
  medium: 5,
  hard: 3,
};

//to change levels
let currentlevel;

let time = currentlevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector(".current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");
const maincontent = document.querySelector(".main-content");
const buttons = document.querySelector(".select-levels");
const back = document.querySelector(".back");
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

//initialize game
function init() {
  //random word selector
  showWord(words);
  //call countdown every second
  setInterval(countdown, 1000);
  //check the status of the game
  setInterval(checkStatus, 50);
  //match the word input
  wordInput.addEventListener("input", startMatch);
  //show the level you are in
  seconds.innerHTML = currentlevel;
  timeDisplay.innerHTML = currentlevel;
}

window.addEventListener("load", init);

function showMain() {
  maincontent.style.opacity = 1;
  maincontent.style.pointerEvents = "all";
  maincontent.style.zindex = 100;
  buttons.style.zindex = 0;
  buttons.style.opacity = 0;
  buttons.style.pointerEvents = "none";
  score = 0;
  scoreDisplay = score;
}

function showButtons() {
  maincontent.style.opacity = 0;
  maincontent.style.pointerEvents = "none";
  maincontent.style.zindex = 0;
  buttons.style.zindex = 100;
  buttons.style.opacity = 1;
  buttons.style.pointerEvents = "all";
  score = 0;
  scoreDisplay = score;
}

back.addEventListener("click", showButtons);
//level select
easy.addEventListener("click", function () {
  currentlevel = levels.easy;
  time = 8;
  seconds.innerHTML = 7;
  isPlaying = true;
  message.innerHTML = "";
  showWord(words);
  showMain();
  return currentlevel;
});

medium.addEventListener("click", function () {
  currentlevel = levels.medium;
  time = 6;
  seconds.innerHTML = 5;
  isPlaying = true;
  message.innerHTML = "";
  showWord(words);
  showMain();
  return currentlevel;
});

hard.addEventListener("click", function () {
  currentlevel = levels.hard;
  seconds.innerHTML = 3;
  time = 4;
  isPlaying = true;
  message.innerHTML = "";
  showWord(words);
  showMain();
  return currentlevel;
});

//selecting random word
function showWord(words) {
  //random number generator
  const random = Math.floor(Math.random() * words.length + 1);
  //random word selector
  currentWord.innerHTML = words[random];
}

// countdown timer
function countdown() {
  //checking if timer hasn't run out
  if (time > 0) {
    //decrement
    time--;
  } else if (time === 0) {
    //game over
    isPlaying = false;
  }
  //show time
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!😞";
    timeDisplay.style.color = "red";
    score = -1;
  }
}
