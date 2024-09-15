import { getById } from "../utilities.js";

const handleVisibilityOnOptionMenu = () => {
  toggleVisibilityWithClickOutside("options-icon", "options-menu");
};

const handleVisibilityOnRankingMenu = () => {
  toggleVisibilityWithClickOutside("ranking-history-btn", "ranking-history-list");
};

// PRIVATE

const toggleVisibilityWithClickOutside = (toggleButtonId, elementId) => {
  const toggleButton = getById(toggleButtonId);
  const element = getById(elementId);

  toggleButton.addEventListener("click", () => element.classList.toggle("d-none"));

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target) && e.target !== toggleButton) element.classList.add("d-none");
  });
};

export { handleVisibilityOnOptionMenu, handleVisibilityOnRankingMenu }
