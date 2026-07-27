// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [icon(), mdx()],
  vite: {
    server: {
      allowedHosts: [
        'pugnaciously-epochal-arturo.ngrok-free.dev'
      ]
    }
  }
});