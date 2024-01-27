import { defineConfig } from 'astro/config';
const SERVER_PORT = 3000;

// https://astro.build/config
export default defineConfig({
server: { port: SERVER_PORT },
  site: 'https://grosscoding.github.io',
  base: '/grosscoding-home',
  integrations: [sitemap()]   
});