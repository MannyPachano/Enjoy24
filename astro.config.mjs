import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` when you map a custom domain (canonical URLs, OG, sitemap, robots).
export default defineConfig({
  site: 'https://enjoy24.netlify.app',
  integrations: [sitemap()],
});
