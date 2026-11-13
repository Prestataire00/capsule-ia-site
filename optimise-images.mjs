// Convertit les images sources (assets/img) en WebP optimisé (public/img).
// Usage : node optimise-images.mjs
import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets/img';
const OUT = 'public/img';
await mkdir(OUT, { recursive: true });
for (const f of await readdir(SRC)) {
  if (!/\.(png|jpe?g)$/i.test(f)) continue;
  const out = path.join(OUT, f.replace(/\.\w+$/, '.webp'));
  await sharp(path.join(SRC, f)).resize({ width: 1800, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
}
await sharp(path.join(SRC, 'logo.png')).resize(180).png().toFile('public/favicon.png');
await sharp(path.join(SRC, 'equipe.png')).resize(1200, 630, { fit: 'contain', background: '#c40d60' }).jpeg({ quality: 85 }).toFile('public/partage.jpg');
console.log('images ok');

// Logos clients (assets/clients -> public/img/clients)
const CSRC = 'assets/clients';
const COUT = 'public/img/clients';
await mkdir(COUT, { recursive: true });
for (const f of await readdir(CSRC)) {
  if (!/\.(png|jpe?g|webp)$/i.test(f)) continue;
  let img = sharp(path.join(CSRC, f));
  // logo blanc sur fond transparent : on l'assombrit pour qu'il soit lisible sur fond clair
  if (f.startsWith('the-artist-academy')) img = img.negate({ alpha: false });
  await img.trim().resize({ height: 200, width: 420, fit: 'inside', withoutEnlargement: true }).webp({ quality: 90 })
    .toFile(path.join(COUT, f.replace(/\.\w+$/, '.webp')));
}
console.log('logos clients ok');
