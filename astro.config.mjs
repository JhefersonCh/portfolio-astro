// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: netlify(),
  integrations: [tailwind(), react()],
});