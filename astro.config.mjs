// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    server: {
      allowedHosts: [
        'f315-45-184-78-10.ngrok-free.app'
      ]
    }
  }
});