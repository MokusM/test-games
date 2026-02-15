import "./styles/main.scss";
import { games, winners } from "./data/games.js";
import { createGameSection } from "./components/GameSection.js";
import { initSearchModal } from "./components/SearchModal.js";
import { renderCards, renderWinnersCards } from "./utils/renderCards.js";
import { initHorizontalScroll } from "./utils/horizontalScroll.js";

// --- Sections config ---
const sections = [
  {
    id: "game-tabs-list",
    tabs: [
      { key: "recent", label: "Recent" },
      { key: "favourite", label: "Favourite" },
    ],
    defaultCategory: "recent",
  },
  { id: "top-games-list", title: "Top games", category: "top" },
  { id: "mini-games-list", title: "Mini games", category: "mini" },
];

// --- 1. Generate sections from config ---
const gameSectionsContainer = document.getElementById("game-sections");

sections.forEach((cfg) => {
  gameSectionsContainer.appendChild(createGameSection(cfg));
});

// --- 2. Render cards ---
const winnersList = document.getElementById("winners-list");
renderWinnersCards(winnersList, winners);

sections.forEach(({ id, category, defaultCategory }) => {
  const list = document.getElementById(id);
  const cat = category || defaultCategory;
  renderCards(list, games.filter((g) => g.categories.includes(cat)));
});

// --- 3. Horizontal scroll for winners-list ---
initHorizontalScroll(winnersList);

// --- 4. Section arrow navigation + disabled state ---
const sectionIds = sections.map((s) => s.id);

function updateArrows(listId) {
  const list = document.getElementById(listId);
  if (!list) return;

  const leftBtn = document.querySelector(
    `.game-section__arrow--left[data-list="${listId}"]`,
  );
  const rightBtn = document.querySelector(
    `.game-section__arrow--right[data-list="${listId}"]`,
  );
  if (!leftBtn || !rightBtn) return;

  const maxScroll = list.scrollWidth - list.clientWidth;

  leftBtn.disabled = list.scrollLeft <= 0;
  rightBtn.disabled = maxScroll <= 0 || list.scrollLeft >= maxScroll - 1;
}

sectionIds.forEach((id) => {
  const list = document.getElementById(id);
  if (!list) return;
  list.addEventListener("scroll", () => updateArrows(id));
  updateArrows(id);
});

window.addEventListener("resize", () => sectionIds.forEach(updateArrows));

document.querySelectorAll(".game-section__arrow").forEach((btn) => {
  btn.addEventListener("click", () => {
    const list = document.getElementById(btn.dataset.list);
    if (!list) return;

    const card = list.querySelector(".game-card");
    if (!card) return;

    const scrollAmount = card.offsetWidth + 16;
    const direction = btn.classList.contains("game-section__arrow--left")
      ? -1
      : 1;

    list.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  });
});

// --- 5. Tabs (Recent / Favourite) ---
document.querySelectorAll(".game-section__tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const activeTab = document.querySelector(".game-section__tab--active");
    if (activeTab) activeTab.classList.remove("game-section__tab--active");
    tab.classList.add("game-section__tab--active");

    const category = tab.dataset.tab;
    const tabsList = document.getElementById("game-tabs-list");

    renderCards(
      tabsList,
      games.filter((g) => g.categories.includes(category)),
    );

    tabsList.scrollLeft = 0;
    updateArrows("game-tabs-list");
  });
});

// --- 6. Search modal ---
initSearchModal(games);
