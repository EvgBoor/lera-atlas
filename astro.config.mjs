import { defineConfig } from 'astro/config';

// Source briefs live in /src (docx), so the site code lives in /web.
export default defineConfig({
  srcDir: './web',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
