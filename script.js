const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const guideCards = [...document.querySelectorAll('.guide-card')];
const noResults = document.getElementById('noResults');
if (searchForm && searchInput) {
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;
    guideCards.forEach(card => {
      const matches = !query || (card.innerText + ' ' + card.dataset.search).toLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) visible++;
    });
    if (noResults) noResults.hidden = visible > 0;
    document.getElementById('guides').scrollIntoView({behavior:'smooth'});
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
