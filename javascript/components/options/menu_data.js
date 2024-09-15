import { getById, convertTimeInSeconds } from "../utilities.js";
import { decrementeCountdown } from "../time/countdown.js"

const handleClickOnValidOptionBtn = () => {
  getById("submit-option-btn").addEventListener("click", () => {
    // We update hidden inputs that will be used as current values in the app
    convertAndSetTime(elements.raceTime);
    convertAndSetTime(elements.waitTime);
    convertAndSetTime(elements.betTime);
    getById("infinity-race-result").checked = getById("infinity-race-checkbox").checked;

    // We update countdown related to the new data filled in the form
    decrementeCountdown(elements.waitTime.min.value, elements.waitTime.sec.value);

    getById("options-menu").classList.add("d-none");
  });
};

// PRIVATE

const elements = {
  raceTime: { min: getById("race-time-min"), sec: getById("race-time-sec"), total: getById("race-time-total") },
  waitTime: { min: getById("wait-time-min"), sec: getById("wait-time-sec"), total: getById("wait-time-total") },
  betTime: { min: getById("bet-time-min"), sec: getById("bet-time-sec"), total: getById("bet-time-total") },
};

const convertAndSetTime = (timeElement) => {
  const { min, sec, total } = timeElement;
  total.innerText = convertTimeInSeconds(min.value, sec.value);
};

export { handleClickOnValidOptionBtn }
