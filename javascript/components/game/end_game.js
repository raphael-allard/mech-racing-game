import { getById } from "../utilities.js";

let ranking = [];

const currentRanking = () => ranking;

const populateRanking = (sprite) => {
  const rankingList = getById("ranking-history-list");
  const emptyDiv = getById("ranking-history-empty");
  if (emptyDiv) emptyDiv.remove();

  if (currentRanking().length === 0) {
    sprite.classList.add("winner");

    const gameNumber = getById("game-number").innerText;
    rankingList.insertAdjacentHTML("beforeend", `<div>${gameNumber}. ${sprite.id.split("-")[0]}</div>`)
  }

  if (!currentRanking().includes(sprite.id)) currentRanking().push(sprite.id);
}

const emptyCurrentRanking = () => {
  ranking = [];
}

const endGame = () => {
  const scoreboard = getById("scoreboard");

  ranking.forEach((spriteName, index) => {
    scoreboard.insertAdjacentHTML('beforeend', `<div class="sprite-result">${index + 1} - ${spriteName}</div>`)
  });

  scoreboard.classList.remove("d-none");
}

export { currentRanking, populateRanking, emptyCurrentRanking, endGame }
