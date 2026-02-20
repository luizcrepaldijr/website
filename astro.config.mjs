import { defineConfig } from 'astro/config';
import icon from 'astro-icon'; // Make sure this is imported

export default defineConfig({
  integrations: [
    icon(), // Ensure this is called here
  ],
});