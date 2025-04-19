document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('menu');
  const body = document.body;

  // Ouvrir/fermer le menu en cliquant sur le bouton hamburger
  hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('modal-open');  // Pour empêcher de cliquer ailleurs quand le menu est ouvert
  });

  // Fermer le menu si on clique en dehors
  body.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      menu.classList.remove('active');
      body.classList.remove('modal-open');
    }
  });

  // Empêcher la fermeture du menu si on clique à l'intérieur du menu
  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});
