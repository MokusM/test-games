import { createGameCard } from "../components/GameCard.js";
import { createWinnersCard } from "../components/WinnerCard.js";

export function renderCards(container, list) {
  container.innerHTML = "";
  list.forEach((game) => container.appendChild(createGameCard(game)));
}

export function renderWinnersCards(container, list) {
  container.innerHTML = "";
  list.forEach((winner) => container.appendChild(createWinnersCard(winner)));
}
