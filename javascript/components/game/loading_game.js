import { decrementeCountdown } from "../time/countdown.js"
import { handleVisibilityOnOptionMenu, handleVisibilityOnRankingMenu } from "../options/elements_visibility.js"
import { handleClickOnValidOptionBtn } from "../options/menu_data.js";
import { handleClickOnStartButton } from "./start_game.js";

const loadingGame = () => {
  decrementeCountdown();
  handleVisibilityOnOptionMenu();
  handleVisibilityOnRankingMenu()
  handleClickOnValidOptionBtn();
  handleClickOnStartButton();
}

export { loadingGame }
