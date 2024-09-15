import { getById } from "../utilities.js";

const background = getById("background-track");

const movingBackground = () => {
  background.classList.add("moving");
}

const stopMovingBackground = () => {
  background.classList.remove("moving");
}

export { movingBackground, stopMovingBackground }
