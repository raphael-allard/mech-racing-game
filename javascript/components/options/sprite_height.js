import { getById } from "../utilities.js";

const spriteInitialPositions = {};
const sprites = document.querySelectorAll(".sprite-sheet");

const storeInitialPositions = () => {
  sprites.forEach(sprite => {
    const initialTop = parseInt(sprite.offsetTop, 10);
    spriteInitialPositions[sprite.id] = initialTop;
  });
};

const adjustSpriteHeight = (spriteId, heightValue) => {
  const sprite = getById(spriteId);
  const initialTop = spriteInitialPositions[spriteId];
  const newTop = initialTop - heightValue;
  sprite.style.top = `${newTop}px`;
};

const handleChangeOnSpriteHeight = (spriteId) => {
  const heightInput = getById(`${spriteId}-height`);

  heightInput.addEventListener("input", (event) => {
    const heightValue = parseInt(event.target.value, 10);
    adjustSpriteHeight(spriteId, heightValue);
  });
};

const handleChangesOnSpriteHeight = () => {
  storeInitialPositions();

  handleChangeOnSpriteHeight("red-mech");
  handleChangeOnSpriteHeight("purple-mech");
  handleChangeOnSpriteHeight("green-mech");
  handleChangeOnSpriteHeight("yellow-mech");
  handleChangeOnSpriteHeight("white-mech");
  handleChangeOnSpriteHeight("blue-mech");
};

export { handleChangesOnSpriteHeight };
