// Formations « bootcamp » (16 heures) : Claude, ChatGPT, Copilot, Cerveau IA.
// Le contenu vient de bootcamps.json, généré depuis les pages validées par
// outils/importer-bootcamps.py. Pour corriger un texte, modifier bootcamps.json.
import data from './bootcamps.json';

/** Programme PDF de chaque formation (dossier public/syllabus). */
export const syllabus = {
  'bootcamp-claude': { href: '/syllabus/syllabus-capsule-ia-bootcamp-claude.pdf', pages: 6 },
  'bootcamp-chatgpt': { href: '/syllabus/syllabus-capsule-ia-bootcamp-chatgpt.pdf', pages: 6 },
  'bootcamp-copilot': { href: '/syllabus/syllabus-capsule-ia-bootcamp-copilot.pdf', pages: 6 },
  'cerveau-ia': { href: '/syllabus/syllabus-capsule-ia-cerveau-ia.pdf', pages: 6 },
  acculturation: { href: '/syllabus/syllabus-capsule-ia-utiliser-ia-au-quotidien.pdf', pages: 7 },
  metiers: { href: '/syllabus/syllabus-capsule-ia-ia-et-metiers.pdf', pages: 6 },
  'rgpd-reglementation': { href: '/syllabus/syllabus-capsule-ia-rgpd-reglementation.pdf', pages: 5 },
  'vibe-coding': { href: '/syllabus/syllabus-capsule-ia-vibe-coding.pdf', pages: 6 },
};

export const bootcamps = data;
