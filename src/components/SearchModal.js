import { renderCards } from "../utils/renderCards.js";

/**
 * Initializes the search modal: open, close, filtering.
 *
 * @param {Array} games — array of all games for search
 */
export function initSearchModal(games) {
  const searchBtn = document.getElementById("search-btn");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("search-close");
  const input = modal.querySelector(".modal-content-body-search__input");
  const results = modal.querySelector(".modal-content-body-list");
  const clearBtn = document.getElementById("search-clear");

  function open() {
    modal.classList.remove("modal--hidden");
    input.value = "";
    renderCards(results, games);
    input.focus();
  }

  function close() {
    modal.classList.add("modal--hidden");
  }

  searchBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  // Close on overlay click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("modal--hidden")) {
      close();
    }
  });

  // Clear search input
  clearBtn.addEventListener("click", () => {
    input.value = "";
    renderCards(results, games);
    input.focus();
  });

  // Filter by name
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    const filtered = query
      ? games.filter((g) => g.name.toLowerCase().includes(query))
      : games;

    if (filtered.length === 0) {
      results.innerHTML =
        '<p class="modal-content-body-list__empty">No results found</p>';
    } else {
      renderCards(results, filtered);
    }
  });
}
