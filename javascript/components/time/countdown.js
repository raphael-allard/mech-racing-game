import { getById, convertTimeInSeconds, convertSecondsInTime } from "../utilities.js";
import { startGame } from "../game/start_game.js";

let countdownInterval;
const countdownContainer = getById("countdown-container");
const countdownTime = getById("countdown-time");

const decrementeCountdown = () => {
  // Clear any existing interval
  if (countdownInterval) clearInterval(countdownInterval);

  const initialMin = getById("wait-time-min").value;
  const initialSec = getById("wait-time-sec").value;

  countdownTime.innerText = `${initialMin}:${initialSec}`;

  updateCountdownDisplay(initialMin, initialSec);
  let totalSecs = convertTimeInSeconds(initialMin, initialSec);
  const betTimeTotal = parseInt(getById("bet-time-total").innerText, 10);

  countdownInterval = setInterval(() => {
    totalSecs -= 1;

    const [min, sec] = convertSecondsInTime(totalSecs);
    updateCountdownDisplay(min, sec);

    if (totalSecs <= betTimeTotal) handleBettingClose();
    if (totalSecs <= 0) handleCountdownEnd();
  }, 1000);
};

const handleCountdownEnd = () => {
  clearInterval(countdownInterval);

  countdownTime.innerText = "00:00";
  countdownContainer.classList.add("d-none");
  getById("options-menu").classList.add("d-none");
  getById("ranking-history-list").classList.add("d-none");

  startGame();
};

// PRIVATE

const updateCountdownDisplay = (minutes, seconds) => {
  countdownTime.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const handleBettingClose = () => {
  countdownContainer.style.color = "red";
  getById("countdown-subtitle").innerText = "LES PARIS NE SONT PLUS POSSIBLES !";
};

export { decrementeCountdown, handleCountdownEnd };
