// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const productionUrl = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = productionUrl
  ? productionUrl.startsWith('http') ? productionUrl : `https://${productionUrl}`
  : 'https://www.transformatechadvisors.com';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [icon(), mdx(), sitemap()],
  vite: {
    server: {
      allowedHosts: [
        'pugnaciously-epochal-arturo.ngrok-free.dev'
      ]
    }
  }
});
