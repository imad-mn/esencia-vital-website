// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['astro-icon', 'debug']
    }
  },
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [icon()],
  session: {
    driver: 'cookie' // Keeps session storage on the client side
  }
});