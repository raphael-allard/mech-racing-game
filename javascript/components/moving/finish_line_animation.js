import { resetGame } from "../game/reset_game.js";
import { getById } from "../utilities.js";

const moveFinishLine = () => {
  const finishLine = getById("finish-line");

  const finishLineInterval = setInterval(() => {
    const style = window.getComputedStyle(finishLine);
    // Get the current "right" value and parse it to an integer (assuming it's in "px")
    let rightValue = parseInt(style.getPropertyValue("right"), 10);
    // Increment the right value by 1px
    rightValue += 1;
    // Apply the new right value to the element
    finishLine.style.right = rightValue + "px";

    updateFinishLineCrossedLeftWidth(finishLine);

    if (isFinishLineCrossedLeftWidth()) {
      clearInterval(finishLineInterval);
      resetGame();
    }
  }, 10);
}

let finishLineCrossedLeftWidth = false;
const isFinishLineCrossedLeftWidth = () => {
  return finishLineCrossedLeftWidth;
}

// PRIVATE

const updateFinishLineCrossedLeftWidth = (finishLine) => {
  const finishLinePosition = finishLine.getBoundingClientRect().x;
  finishLineCrossedLeftWidth = finishLinePosition <= -5;
}

export { moveFinishLine, isFinishLineCrossedLeftWidth }
