/* =========================
   1. ESTADO ACTIVO DEL MENÚ
========================= */

const menuLinks = document.querySelectorAll('.menu a');

function setActiveMenu() {
  menuLinks.forEach(link => link.classList.remove('active'));

  if (window.location.hash === '#contacto') {
    document.querySelector('.menu a[href="#contacto"]')?.classList.add('active');
  } else {
    document.querySelector('.menu a[href="#"]')?.classList.add('active');
  }
}

window.addEventListener('hashchange', setActiveMenu);
window.addEventListener('load', setActiveMenu);

/* =========================
   2. ÚLTIMO ÁLBUM VISITADO
========================= */

const albums = document.querySelectorAll('.album a');
const lastPlayedContainer = document.getElementById('last-played');

albums.forEach(link => {
  link.addEventListener('click', () => {
    const title = link.parentElement.querySelector('h3')?.innerText;
    if (title) {
      localStorage.setItem('lastPlayedAlbum', title);
    }
  });
});

const lastPlayed = localStorage.getItem('lastPlayedAlbum');

if (lastPlayed && lastPlayedContainer) {
  lastPlayedContainer.innerText = `Último escuchado: ${lastPlayed}`;
  lastPlayedContainer.style.fontSize = '0.85rem';
  lastPlayedContainer.style.color = 'var(--muted)';
  lastPlayedContainer.style.marginBottom = '2rem';
}

/* =========================
   3. FEEDBACK DE CARGA
========================= */

albums.forEach(link => {
  link.addEventListener('click', () => {
    const frame = link.querySelector('.album-frame');
    if (frame) {
      frame.style.opacity = '0.6';
      frame.style.cursor = 'wait';
    }
    document.body.style.cursor = 'wait';
  });
});
