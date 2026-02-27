// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    server: {
      allowedHosts: [
        'pugnaciously-epochal-arturo.ngrok-free.dev'
      ]
    }
  }
});