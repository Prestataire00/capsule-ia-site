// /llms.txt : présentation du site pour les assistants IA (ChatGPT, Claude, Perplexity…).
import { modules, organisme } from '../data/modules.js';
import { ressources } from '../data/ressources.js';

export function GET({ site }) {
  const u = (p) => new URL(p, site).href;
  const lignes = [
    `# ${organisme.nom}`,
    '',
    `> ${organisme.bref}`,
    '',
    `- Public : entreprises et équipes en France, tous secteurs, sans prérequis technique.`,
    `- Format : formations à distance en priorité ; sessions dans les locaux du client et modules e-learning possibles.`,
    `- Programmes : construits sur mesure après un échange sur les besoins.`,
    `- Qualité et financement : organisme certifié Qualiopi ; renseignement sur la prise en charge par les OPCO.`,
    `- Devis : proposition envoyée sous 2 heures, rappel d'un formateur sous 48 heures.`,
    `- Contact : ${organisme.email} · ${organisme.telephone}`,
    '',
    '## Formations',
    '',
    ...modules.map((m) => `- [${m.nom}](${u(m.href)}) : ${m.bref}`),
    '',
    '## Guides',
    '',
    ...ressources.map((r) => `- [${r.titre}](${u(`/ressources/${r.slug}/`)}) : ${r.description}`),
    '',
    '## Pages utiles',
    '',
    `- [Demander un devis](${u('/devis/')}) : formulaire de demande, réponse sous 2 heures.`,
    `- [Brochure Capsule IA (PDF, 12 pages)](${u('/Brochure-Capsule-IA.pdf')}) : présentation de l'organisme, de l'approche, des formations, d'exemples de missions et des formateurs.`,
    `- [Accueil](${u('/')}) : présentation, approche, équipe et références.`,
    `- [Version détaillée pour les assistants IA](${u('/llms-full.txt')}) : contenu complet des formations, questions fréquentes et guides.`,
    '',
  ];
  return new Response(lignes.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
