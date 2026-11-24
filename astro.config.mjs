import { defineConfig } from 'astro/config';

// GitHub Pages: https://<GITHUB_USER>.github.io/<REPO>/
const GITHUB_USER = 'evgboor';
const REPO = 'lera-atlas';

// Source briefs live in /src (docx), so the site code lives in /web.
export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${REPO}`,
  trailingSlash: 'always',
  srcDir: './web',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
