document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('menu');
  const body = document.body;
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Ouvrir/fermer le menu en cliquant sur le bouton hamburger
  hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('modal-open');  // Pour empêcher de cliquer ailleurs quand le menu est ouvert
  });

  // Fermer le menu si on clique en dehors
  body.addEventListener('click', (event) => {
    // Vérifie si le clic est en dehors du menu ET du bouton hamburger
    if (!menu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      menu.classList.remove('active');
      body.classList.remove('modal-open');
    }
  });

  // Empêcher la fermeture du menu si on clique à l'intérieur du menu
  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // Affichage du bouton "Monter en haut" en fonction du défilement de la page
  window.onscroll = function() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollPos / docHeight) * 100;

  // Afficher ou cacher le bouton
  if (scrollPos > 50) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

  // Modifier la couleur en fonction du pourcentage de défilement
  const color = `rgb(${Math.min(255, 255 - scrollPercentage * 2)}, ${Math.min(255, 100 + scrollPercentage * 1.5)}, ${Math.min(255, 255 - scrollPercentage * 1.5)})`;
  scrollTopBtn.style.backgroundColor = color;
};


  // Lorsque le bouton est cliqué, on fait défiler la page en haut
  scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});
window.addEventListener('scroll', function() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  
  if (scrollPercentage > 70) {
    scrollTopBtn.style.display = "block"; // Affiche le bouton
  } else {
    scrollTopBtn.style.display = "none"; // Cache le bouton
  }
});

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
});


