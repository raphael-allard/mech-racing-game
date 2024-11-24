import { decrementeCountdown } from "../time/countdown.js"
import { handleVisibilityOnOptionMenu, handleVisibilityOnOptionCssMenu, handleVisibilityOnRankingMenu } from "../options/elements_visibility.js"
import { handleChangesOnSpriteHeight } from "../options/sprite_height.js";
import { handleChangesOnFinishLine } from "../options/finish_line_height_and_top.js";
import { handleClickOnValidOptionBtn } from "../options/menu_data.js";
import { handleClickOnStartButton } from "./start_game.js";

const loadingGame = () => {
  decrementeCountdown();
  handleVisibilityOnOptionMenu();
  handleVisibilityOnOptionCssMenu();
  handleChangesOnSpriteHeight();
  handleChangesOnFinishLine();
  handleVisibilityOnRankingMenu()
  handleClickOnValidOptionBtn();
  handleClickOnStartButton();
}

export { loadingGame }
