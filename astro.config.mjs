import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "http://pkk-astro.netlify.app/",
  integrations: [preact()]
});