// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    server: {
      allowedHosts: [
        '67a5-45-184-78-141.ngrok-free.app'
      ]
    }
  }
});