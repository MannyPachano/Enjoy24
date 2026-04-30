import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** Astro skips Vite `transformIndexHtml` for multi-page static HTML — patch after emit. */
function integrationAsyncStylesheets() {
  const stylesheetLink =
    /<link\s+rel="stylesheet"\s+href="(\/_astro\/[^"]+\.css)"\s*\/?>/g;

  return {
    name: 'integration-async-stylesheets',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const root = fileURLToPath(dir);

        function patchHtml(html) {
          return html.replace(stylesheetLink, (full, href) =>
            [
              `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'" />`,
              `<noscript>${full}</noscript>`,
            ].join('')
          );
        }

        function walk(d) {
          for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
            const p = path.join(d, ent.name);
            if (ent.isDirectory()) walk(p);
            else if (ent.name.endsWith('.html')) {
              const html = fs.readFileSync(p, 'utf8');
              const next = patchHtml(html);
              if (next !== html) fs.writeFileSync(p, next);
            }
          }
        }

        walk(root);
      },
    },
  };
}

// Change `site` when you map a custom domain (canonical URLs, OG, sitemap, robots).
export default defineConfig({
  site: 'https://enjoy24.netlify.app',
  integrations: [sitemap(), integrationAsyncStylesheets()],
});
