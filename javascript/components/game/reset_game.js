import { areAllSpritesReady, moveBackSprites } from "../moving/sprite_animation.js";
import { decrementeCountdown } from "../time/countdown.js";
import { getById } from "../utilities.js";
import { emptyCurrentRanking } from "./end_game.js";

const resetGame = () => {
  emptyCurrentRanking();
  changeRaceNumber();
  moveBackSprites();
  moveBackFinishLine();
  removeWinnerHalo();
  cleanHideResultsAndDisplayCountdown();
  removeRedColorFromCountdownContainer();

  // Remettre la ligne à sa place
  // Vérifier course illimitée ou non
  // Bloquer le défilement du background
}

// PRIVATE

const removeRedColorFromCountdownContainer = () => {
  const countdownContainer = getById("countdown-container");
  countdownContainer.style.color = "black";
}

const changeRaceNumber = () => {
  const gameNumberElement = getById("game-number");
  gameNumberElement.innerText = parseInt(gameNumberElement.innerText, 10) + 1;
};

const removeWinnerHalo = () => {
  const winner = document.querySelector(".sprite-sheet.winner");
  if (winner) winner.classList.remove("winner");
}

const moveBackFinishLine = () => {
  const finishLine = getById("finish-line");
  finishLine.style.right = "-5px";
}

const cleanHideResultsAndDisplayCountdown = () => {
  const scoreboard = getById("scoreboard");
  scoreboard.classList.add("d-none");
  scoreboard.innerHTML = "";

  const countdownInterval = setInterval(() => {
    if (areAllSpritesReady()) {
      getById("countdown-container").classList.remove("d-none");
      if (getById("infinity-race-result").checked) {
        clearInterval(countdownInterval);
        decrementeCountdown();
      }
    }
  }, 1000);
}

export { resetGame }
