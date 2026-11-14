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

// Barre fixe : cachée en descendant, de retour dès qu'on remonte (comme sur Flair)
let dernierY = 0;
function toggleBarre() {
  const barre = document.querySelector('.barre');
  if (!barre) return;
  const y = window.scrollY;
  const delta = y - dernierY;
  if (Math.abs(delta) < 6 && y > 420) return;
  const on = y > 420 && delta < 0;
  barre.classList.toggle('is-on', on);
  barre.inert = !on;
  dernierY = y;
}

// Titres : chaque lettre arrive en cascade
function kinetic(el) {
  if (el.classList.contains('kc')) return;
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 1) return walk(n);
      if (n.nodeType !== 3 || !n.textContent.trim()) return;
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) return frag.append(part);
        const w = document.createElement('span');
        w.className = 'w';
        w.setAttribute('aria-hidden', 'true');
        for (const ch of part) {
          const c = document.createElement('span');
          c.className = 'ch';
          c.style.setProperty('--i', i++);
          c.textContent = ch;
          w.append(c);
        }
        frag.append(w);
      });
      n.replaceWith(frag);
    });
  };
  walk(el);
  el.classList.add('kc');
}

// Boutons magnétiques et cartes qui s'inclinent vers le curseur
function interactions() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('.btn, .ctab-btn').forEach((b) => {
    b.addEventListener('mousemove', (e) => {
      const r = b.getBoundingClientRect();
      b.classList.add('mag');
      b.style.translate = `${(((e.clientX - (r.left + r.width / 2)) / r.width) * 20).toFixed(1)}px ${(((e.clientY - (r.top + r.height / 2)) / r.height) * 14).toFixed(1)}px`;
    });
    b.addEventListener('mouseleave', () => (b.style.translate = ''));
  });
  document.querySelectorAll('.modcard, .card, .step, .row-card').forEach((c) => {
    c.classList.add('tilt');
    c.addEventListener('mousemove', (e) => {
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = `perspective(900px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
    });
    c.addEventListener('mouseleave', () => (c.style.transform = ''));
  });
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
  dernierY = window.scrollY;

  const targets = [
    ...document.querySelectorAll('.stage > *:not(.deco):not(.navbar), .stage > .hl, .stage > .cur, .stage > .dot'),
  ];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    pending = [];
  } else {
    targets.forEach((el) => el.classList.add('rv'));
    document.querySelectorAll('.stage > h1.t, .stage > h2.t').forEach(kinetic);
    interactions();
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
window.addEventListener('scroll', toggleBarre, { passive: true });
window.addEventListener('resize', () => {
  setScale();
  requestReveal();
});
document.addEventListener('astro:after-swap', () => {
  root.classList.add('js');
  setScale();
});
document.addEventListener('astro:page-load', init);
