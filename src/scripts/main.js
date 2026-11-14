// Capsule IA — mise à l'échelle des scènes, animations d'apparition, FAQ
const root = document.documentElement;
let pending = [];
let ticking = false;

function setScale() {
  const kmax = parseFloat(getComputedStyle(root).getPropertyValue('--kmax')) || 1;
  root.style.setProperty('--k', Math.min(root.clientWidth / 1366, kmax).toFixed(5));
}

// Révèle tout élément arrivé dans (ou au-dessus de) la fenêtre
function reveal() {
  ticking = false;
  if (!pending.length) return;
  const limit = window.innerHeight * 0.92;
  let i = 0;
  pending = pending.filter((el) => {
    if (el.getBoundingClientRect().top > limit) return true;
    el.style.setProperty('--d', Math.min(i++ * 60, 420) + 'ms');
    el.classList.add('in');
    return false;
  });
}

// Le bouton flottant apparaît après un peu de défilement
function toggleCta() {
  // masqué tout en bas de page pour ne pas recouvrir le pied de page
  const bas = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 320;
  document.querySelector('.cta-flottant')?.classList.toggle('is-on', window.scrollY > 520 && !bas);
}

function requestReveal() {
  if (ticking) return;
  ticking = true;
  setTimeout(reveal, 60);
}

function init() {
  root.classList.add('js');
  setScale();
  toggleCta();

  const targets = [
    ...document.querySelectorAll('.stage > *:not(.deco):not(.navbar), .stage > .hl, .stage > .cur, .stage > .dot'),
  ];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    pending = [];
  } else {
    targets.forEach((el) => el.classList.add('rv'));
    pending = targets;
    requestReveal();
  }

  // FAQ : une seule réponse ouverte
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item) =>
    item.addEventListener('toggle', () => {
      if (item.open) items.forEach((o) => o !== item && (o.open = false));
    })
  );
}

window.addEventListener('scroll', requestReveal, { passive: true });
window.addEventListener('scroll', toggleCta, { passive: true });
window.addEventListener('resize', () => {
  setScale();
  requestReveal();
});
document.addEventListener('astro:after-swap', () => {
  root.classList.add('js');
  setScale();
});
document.addEventListener('astro:page-load', init);
