# Games

Adaptive game card page with horizontal slider navigation, category tabs, and search modal.

## Tech stack

- Vanilla JavaScript (no frameworks)
- SCSS (no UI libraries)
- Vite

## Project structure

```
src/
├── main.js                    # Entry point — initialization & orchestration
├── components/
│   ├── GameCard.js            # Game card component
│   ├── GameSection.js         # Section component (header + arrows + list)
│   ├── SearchModal.js         # Search modal logic
│   └── WinnerCard.js          # Winner mini-card component
├── utils/
│   ├── renderCards.js         # Render helpers
│   └── horizontalScroll.js    # Wheel + drag scroll
├── data/
│   └── games.js               # Game & winner data
└── styles/
    ├── main.scss              # Style entry point
    ├── _variables.scss        # CSS custom properties
    ├── _mixins.scss           # SCSS mixins (mobile, scrollbar-hidden)
    ├── _reset.scss            # CSS reset
    ├── _base.scss             # Base styles
    ├── _fonts.scss            # Font definitions
    ├── _header.scss           # Header
    ├── _banner.scss           # Promo banner
    ├── _category-tabs.scss    # Winners strip
    ├── _game-section.scss     # Game sections & arrows
    ├── _game-card.scss        # Game card styles
    └── _search-modal.scss     # Search modal styles
```

## Getting started

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```
