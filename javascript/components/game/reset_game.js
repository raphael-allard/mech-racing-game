import { areAllSpritesReady, moveBackSprites } from "../moving/sprite_animation.js";
import { decrementeCountdown } from "../time/countdown.js";
import { getById } from "../utilities.js";
import { emptyCurrentRanking } from "./end_game.js";

const resetGame = () => {
  console.log("start !");

  emptyCurrentRanking();
  changeRaceNumber();
  moveBackSprites();
  moveBackFinishLine();
  removeWinnerHalo();
  hideResultsAndDisplayCountdown();

  // Remettre la ligne à sa place
  // Vérifier course illimitée ou non
  // Bloquer le défilement du background
}

// PRIVATE

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

const hideResultsAndDisplayCountdown = () => {
  getById("scoreboard").classList.add("d-none");

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
