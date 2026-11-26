// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Si el sitio se publica en un subdirectorio (p. ej. https://dominio.com/demo/),
// compile con:  BASE_PATH=/demo/ npm run build
// Por defecto se publica en la raíz del dominio.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
