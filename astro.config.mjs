import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://grosscoding.github.io',
  base: '/grosscoding-home',
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});