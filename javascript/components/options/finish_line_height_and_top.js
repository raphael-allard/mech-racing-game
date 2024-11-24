import { getById } from "../utilities.js";

const finishLineInitialPositions = {};
const finishLine = getById("finish-line");

const storeInitialPositions = () => {
  finishLineInitialPositions["top"] = parseInt(finishLine.offsetTop, 10);
  finishLineInitialPositions["height"] =  parseInt(finishLine.offsetHeight, 10);
};

const adjustFinishLineHeight = (heightValue) => {
  const initialHeight = finishLineInitialPositions["height"];
  const newHeight = initialHeight + heightValue;
  finishLine.style.height = `${newHeight}px`;
};

const adjustFinishLineTop = (topValue) => {
  const initialTop = finishLineInitialPositions["top"];
  const newTop = initialTop - topValue;
  finishLine.style.top = `${newTop}px`;
};

const handleChangeOnHeightAndTop = () => {
  const heightInput = getById("finish-line-css-height");
  const topInput = getById("finish-line-css-top");

  heightInput.addEventListener("input", (event) => {
    const heightValue = parseInt(event.target.value, 10);
    adjustFinishLineHeight(heightValue);
  });

  topInput.addEventListener("input", (event) => {
    const topValue = parseInt(event.target.value, 10);
    adjustFinishLineTop(topValue);
  });
};

const handleChangesOnFinishLine = () => {
  storeInitialPositions();
  handleChangeOnHeightAndTop();
}

export { handleChangesOnFinishLine }
