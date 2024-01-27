import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const SERVER_PORT = 3000;

// https://astro.build/config
export default defineConfig({
    server: { port: SERVER_PORT },
    site: 'https://kross-media.de',
    integrations: [sitemap()]   
});