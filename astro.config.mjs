import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresse définitive du site : à ajuster si le domaine est différent.
export default defineConfig({
  site: 'https://www.capsule-ia.fr',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
