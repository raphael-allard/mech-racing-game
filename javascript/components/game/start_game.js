import { animateSprites, moveSprites, isThreeQuarterFullWidthCrossed } from "../moving/sprite_animation.js"
import { movingBackground } from "../moving/background_animation.js"
import { moveFinishLine } from "../moving/finish_line_animation.js"
import { getById } from "../utilities.js";
import { handleCountdownEnd } from "../time/countdown.js";
import { currentRanking, endGame } from "./end_game.js";

let animateSpritesInterval;
let moveSpritesInterval;
let middleLineInterval;
let checkEndGameInterval;

const startGame = () => {
  // Clear any existing interval
  clearIntervals();

  // DISABLE BUTTON
  const startBtn = getById("start-game-btn");


  movingBackground();

  animateSpritesInterval = animateSprites();
  moveSpritesInterval = moveSprites();

  middleLineInterval = setInterval(() => {
    if (isThreeQuarterFullWidthCrossed()) {
      moveFinishLine();
      clearInterval(middleLineInterval);
    }
  }, 100);

  checkEndGameInterval = setInterval(() => {
    if (currentRanking().length === 6) {
      clearInterval(checkEndGameInterval);
      clearInterval(moveSpritesInterval);
      endGame();
    }
  }, 100);
}

const handleClickOnStartButton = () => {
  getById("start-game-btn").addEventListener("click", () => handleCountdownEnd());
}

// PRIVATE

const clearIntervals = () => {
  if (animateSpritesInterval) clearInterval(animateSpritesInterval);
  if (moveSpritesInterval) clearInterval(moveSpritesInterval);
  if (middleLineInterval) clearInterval(middleLineInterval);
  if (checkEndGameInterval) clearInterval(checkEndGameInterval);
}

export { startGame, handleClickOnStartButton }
