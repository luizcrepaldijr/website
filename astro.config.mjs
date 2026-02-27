// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    server: {
      allowedHosts: [
        '2152-45-184-78-39.ngrok-free.app'
      ]
    }
  }
});