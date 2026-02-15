export function createWinnersCard({ name, cost, username, image }) {
  const card = document.createElement('div');
  card.classList.add('winner-card');

  card.innerHTML = `
    <img src="/images/${image}" alt="${name}" class="winner-card__image" loading="lazy" />
    <div class="winner-card__info winner-card-info">
      <span class="winner-card-info__name">${name}</span>
      <span class="winner-card-info__cost">${cost}</span>
      <span class="winner-card-info__username">${username}</span>
    </div>
  `;

  return card;
}
