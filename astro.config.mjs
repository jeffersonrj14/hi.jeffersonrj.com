import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'
import robots from 'astro-robots'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://hi.jeffersonrj.com',
  prefetch: {
    prefetchAll: true
  },
  integrations: [solidJs(), tailwind(), sitemap(), robots()],
  // Change 'hybrid' to 'static' for static site generation
  output: 'static',
  // Add the Vercel adapter to deploy on Vercel
  adapter: vercel(),
  image: {
    service: 'none'
  },
  vite: {
    esbuild: {
      target: 'es2022'
    }
  }
})
