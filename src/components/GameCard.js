export function createGameCard({ name, provider, image }) {
  const card = document.createElement('div');
  card.classList.add('game-card');

  card.innerHTML = `
    <div class="game-card__header game-card-header">
      <img src="/images/${image}" alt="${name}" class="game-card-header__image" loading="lazy" />
      <div class="game-card-header__overlay">
        <a href="#" class="game-card-header__btn">Play</a>
        <a href="#" class="game-card-header__btn-inline">Demo</a>
      </div>
    </div>
    <div class="game-card__info game-card-info"> 
      <svg class="game-card-info__icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="none"><path fill="#9FA1AA" d="M2.242 14.857V2.992L12.073 8l-5.568 2.838V8c0-.63-.5-1.144-1.122-1.144-.619 0-1.122.511-1.122 1.144v4.685c0 .397.2.762.53.971.333.21.744.229 1.093.05l9.198-4.685A1.14 1.14 0 0 0 15.702 8c0-.433-.241-.828-.62-1.021L1.623.12A1.105 1.105 0 0 0 .531.172C.201.379 0 .746 0 1.144v13.713C0 15.489.501 16 1.122 16c.62 0 1.12-.51 1.12-1.143Z"/></svg> 
      <span class="game-card-info__name">${name}</span>
    </div>
  `;

  return card;
}
