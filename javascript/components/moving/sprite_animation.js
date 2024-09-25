import { populateRanking } from "../game/end_game.js";
import { getById } from "../utilities.js";

const sprites = document.querySelectorAll(".sprite-sheet");

const animateSprites = () => {
  return setInterval(() => {
    sprites.forEach(sprite => animateSprite(sprite));
  }, 300);
}

const moveSprites = () => {
  return setInterval(() => {
    sprites.forEach(sprite => {
      moveSprite(sprite);
      updateThreeQuarterFullWidthCrossed(sprite);
      if (isSpriteCrossedFinishLine(sprite)) populateRanking(sprite);
    });
  }, 100);
}

const moveBackSprites = () => {
  const moveBackInterval = setInterval(() => {
    if (areAllSpritesReady(sprites)) clearInterval(moveBackInterval);

    sprites.forEach(sprite => {
      moveBackSprite(sprite);
    });
  }, 100);
}

const areAllSpritesReady = () => {
  return Array.from(sprites).every(sprite => sprite.offsetLeft === 10);
};

let threeQuarterFullWidthCrossed = false;
const isThreeQuarterFullWidthCrossed = () => {
  return threeQuarterFullWidthCrossed;
}

// PRIVATE

let position = 0;
const animateSprite = (sprite) => {
  const widthOfEachSprite = 71;
  const widthOfSpriteSheet = 426;
  sprite.style.backgroundPosition = `-${position}px 0px`;

  if (position < widthOfSpriteSheet - 71) {
    position += widthOfEachSprite;
  } else {
    position = widthOfEachSprite;
  }
}

const moveSprite = (sprite) => {
  sprite.style.left = (parseInt(sprite.offsetLeft, 10) + calculatingNextPxMove()) + "px";
}

const moveBackSprite = (sprite) => {
  if (sprite.offsetLeft === 10) return;

  if (sprite.offsetLeft < 20) {
    sprite.style.left = "10px";
  } else {
    sprite.style.left = (parseInt(sprite.offsetLeft, 10) - 10) + "px";
  }
}

// Track how far off we are from the ideal position
let cumulativeError = 0;
const threeQuarterFullWidth = window.innerWidth * 0.7;

const calculatingNextPxMove = () => {
  // Get the total race time in milliseconds
  const raceTimeTotalInMs = parseInt(getById("race-time-total").innerText, 10) * 1000;

  // Calculate the number of intervals (100ms intervals)
  const numberOfIntervals = raceTimeTotalInMs / 100;

  // Calculate the ideal movement per interval (without randomness)
  const baseMovement = threeQuarterFullWidth / numberOfIntervals;

  // Gives a range between -1 and 1
  const randomnessMultiplier = Math.random() * 2 - 1;

  // Adjust the randomness intensity based on progress
  const dynamicRandomFactor = randomnessMultiplier * (baseMovement * 0.5);

  // Adjust the movement considering cumulative error
  const adjustedMovement = baseMovement + dynamicRandomFactor + cumulativeError;

  // Recalculate the cumulative error to ensure we stay on track
  const actualMovement = Math.max(1, adjustedMovement); // Make sure it moves at least 1px
  cumulativeError += (baseMovement - actualMovement);

  // Return the total movement, which includes randomness and error correction
  return actualMovement;
}

const isSpriteCrossedFinishLine = (sprite) => {
  const spritePosition = sprite.getBoundingClientRect().x;
  const linePosition = getById("finish-line").getBoundingClientRect().x;
  return spritePosition >= linePosition;
}

const updateThreeQuarterFullWidthCrossed = (sprite) => {
  const spritePosition = sprite.getBoundingClientRect().x;
  threeQuarterFullWidthCrossed = spritePosition >= threeQuarterFullWidth;
}

export { animateSprites, moveSprites, moveBackSprites, areAllSpritesReady, isThreeQuarterFullWidthCrossed }
