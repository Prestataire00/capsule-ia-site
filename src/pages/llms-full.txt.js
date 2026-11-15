// /llms-full.txt : contenu complet (formations, questions fréquentes, guides) en texte simple.
import { modules, organisme } from '../data/modules.js';
import { ressources } from '../data/ressources.js';

const enTexte = (html) =>
  html
    .replace(/<h2>(.*?)<\/h2>/g, '\n### $1\n')
    .replace(/<li>/g, '- ')
    .replace(/<\/(p|li|ul)>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

export function GET({ site }) {
  const u = (p) => new URL(p, site).href;
  const out = [`# ${organisme.nom}`, '', `> ${organisme.bref}`, '', `Contact : ${organisme.email} · ${organisme.telephone} · devis : ${u('/devis/')}`, ''];
  for (const m of modules) {
    out.push(`## ${m.nom}`, '', `Page : ${u(m.href)}`, '', m.bref, '', `Animation : ${m.formateur}.`, '', 'Contenu :');
    m.points.forEach(([t, d]) => out.push(`- ${t} : ${d}`));
    out.push('', 'Questions fréquentes :', '');
    m.faq.forEach((f) => out.push(`Q : ${f.q}`, `R : ${f.r}`, ''));
  }
  out.push('## Guides', '');
  for (const r of ressources) {
    out.push(`## ${r.titre}`, '', `Page : ${u(`/ressources/${r.slug}/`)} · publié le ${r.date}`, '', r.description, '', enTexte(r.corps), '');
  }
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
