// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// Cambia esto por el dominio real cuando publiques (afecta canonical, OG y sitemap).
const SITE = 'https://lissymonos.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [
    icon({
      include: {
        ph: ['*'],
        'simple-icons': ['whatsapp', 'instagram', 'tiktok'],
      },
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
});
