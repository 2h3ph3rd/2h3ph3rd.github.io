// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://2h3ph3rd.github.io',
  base: '',

  vite: {
    plugins: [tailwindcss()],
  },
});