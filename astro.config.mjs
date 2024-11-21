import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import robots from 'astro-robots';

// https://astro.build/config
export default defineConfig({
  site: 'https://hi.jeffersonrj.com',
  prefetch: {
    prefetchAll: true,
  },
  integrations: [solidJs(), tailwind(), sitemap(), robots()],
  vite: {
    esbuild: {
      target: 'es2022', // Set to modern JavaScript
    },
  },
});
