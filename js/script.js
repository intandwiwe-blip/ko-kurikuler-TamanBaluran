// =========================
// TOGGLE NAVBAR (hamburger)
// =========================
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

hamburger.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle('active');
};

// Klik di luar navbar buat nutup menu
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// =========================
// GOOGLE TRANSLATE TOGGLE
// =========================
const globe = document.querySelector('#bahasa');
const translateBox = document.querySelector('#google_translate_element');

// Awalnya sembunyikan
translateBox.style.display = 'none';

globe.addEventListener('click', (e) => {
  e.preventDefault();
  if (translateBox.style.display === 'none') {
    translateBox.style.display = 'block';
  } else {
    translateBox.style.display = 'none';
  }
});



// =========================
// FEATHER ICONS RELOAD
// =========================
feather.replace();
