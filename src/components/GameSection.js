const ARROW_LEFT = `
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
    <path d="M7 1L1 7l6 6" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

const ARROW_RIGHT = `
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
    <path d="M1 1l6 6-6 6" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

/**
 * Creates a game card section (header + nav + list).
 *
 * @param {Object} config
 * @param {string} config.id          — card list id
 * @param {string} [config.title]     — section title (for regular sections)
 * @param {Array}  [config.tabs]      — tab array [{key, label}] (instead of title)
 * @returns {DocumentFragment}
 */
export function createGameSection({ id, title, tabs }) {
  const fragment = document.createDocumentFragment();

  // --- Header ---
  const header = document.createElement("div");
  header.className = "game-section__header";

  // Left side: title or tabs
  if (tabs) {
    const tabsWrap = document.createElement("div");
    tabsWrap.className = "game-section__tabs";

    tabs.forEach((tab, i) => {
      const btn = document.createElement("button");
      btn.className =
        "game-section__tab" + (i === 0 ? " game-section__tab--active" : "");
      btn.dataset.tab = tab.key;
      btn.textContent = tab.label;
      tabsWrap.appendChild(btn);
    });

    header.appendChild(tabsWrap);
  } else {
    const h2 = document.createElement("h2");
    h2.className = "game-section__title";
    h2.textContent = title;
    header.appendChild(h2);
  }

  // Right side: navigation (arrows + show all)
  const nav = document.createElement("div");
  nav.className = "game-section__nav";

  const leftBtn = document.createElement("button");
  leftBtn.className = "game-section__arrow game-section__arrow--left";
  leftBtn.dataset.list = id;
  leftBtn.setAttribute("aria-label", "Scroll left");
  leftBtn.innerHTML = ARROW_LEFT;

  const rightBtn = document.createElement("button");
  rightBtn.className = "game-section__arrow game-section__arrow--right";
  rightBtn.dataset.list = id;
  rightBtn.setAttribute("aria-label", "Scroll right");
  rightBtn.innerHTML = ARROW_RIGHT;

  const showAll = document.createElement("button");
  showAll.className = "game-section__show-all";
  showAll.textContent = "Show all";

  nav.append(leftBtn, rightBtn, showAll);
  header.appendChild(nav);

  // --- List ---
  const list = document.createElement("div");
  list.className = "game-section__list";
  list.id = id;

  fragment.append(header, list);
  return fragment;
}
