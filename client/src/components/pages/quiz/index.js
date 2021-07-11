import { inputGreeting } from "../../shared/input-greeting.js";
import { nextButton } from "./nextButton.js";
import "./test.js";

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(inputGreeting());

  container.appendChild(nextButton());

  return container;
};
