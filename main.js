"use strict";

const arr = [];
const startGamePage = document.querySelector("#start-game");
const welcomePage = document.querySelector("#welcome");
const endGamePage = document.querySelector("#end-game");
const readyButton = document.querySelector("#ready-button");
const higherButton = document.querySelector("#higher-button");
const smallerButton = document.querySelector("#smaller-button");
const exactButton = document.querySelector("#exact-button");
const guessedNumber = document.querySelector("#guessed-number");
const reportDiv = document.querySelector("#report");
const againButton = document.querySelector("#again-button");

// iteration to fill array with numbers from 0 to 1000
for (let i = 0; i <= 1000; i++) {
  arr.push(i);
}

function gameFunctionalty() {
  // Hide UnActive Sections
  welcomePage.style.display = "block";
  startGamePage.style.display = "none";
  endGamePage.style.display = "none";

  // default values
  let steps = 0;
  let max = arr.length;
  let min = 0;
  let mid = 500;
  let indecatorChar;
  let reportMessage;
  guessedNumber.innerHTML = 500;

  function binarySearch() {
    // iteration each get mid num
    if (max >= min) {
      steps++;
      mid = Math.floor((max + min) / 2);
      guessedNumber.innerHTML = mid;
    } else {
      return -1;
    }
  }

  // Check If The Number is Higher Or Smaller
  higherButton.addEventListener("click", () => {
    indecatorChar = "h";
    min = mid;
    binarySearch();
  });
  smallerButton.addEventListener("click", () => {
    indecatorChar = "s";
    max = mid;
    binarySearch();
  });

  // After Finding The Number
  exactButton.addEventListener("click", () => {
    indecatorChar = "e";
    endGamePage.style.display = "flex";
    startGamePage.style.display = "none";
    reportMessage = `<h2>You Number is<br/>
  <button  class="report-button">${mid}</button>
  <br/> I Gussed it in just ${steps} guesses`;
    reportDiv.innerHTML = reportMessage;
  });

  // Report Message

  // Ready Button Action
  readyButton.addEventListener("click", () => {
    startGamePage.style.display = "flex";
    welcomePage.style.display = "none";
  });
}
gameFunctionalty();
// Again Button Action
againButton.addEventListener("click", () => {
  gameFunctionalty();
});
``;
