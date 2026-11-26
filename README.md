# Transporte Leal — sitio web

Sitio de Transporte Leal (propuesta de diseño 2a "Ruta").
Hecho con [Astro](https://astro.build) (salida 100 % estática) y Tailwind CSS.

## Requisitos

- Node.js **22.12 o superior** (`node -v` para revisar)

## Correr en local

```bash
npm install
npm run dev        # http://localhost:4321
```

## Compilar

```bash
npm run build      # genera dist/
npm run preview    # sirve dist/ para revisarlo
```

**Lo que se sube al servidor es el contenido de `dist/`.** Son archivos estáticos (HTML, CSS, JS e imágenes)
que funcionan en cualquier hosting o servidor web.

Por defecto el sitio se publica en la raíz del dominio. Si va en un subdirectorio, compile indicando la ruta:

```bash
BASE_PATH=/demo/ npm run build
```

### Laravel Forge (servidor de prueba)

- **Web directory:** `/dist`
- **Deploy script:** después del `git pull` que trae Forge, agregue `npm ci && npm run build`

## Dónde cambiar cosas

| Qué | Dónde |
|---|---|
| Nombre, ciudad, teléfono, correo, año de fundación | `src/data/site.ts` |
| Quitar el `noindex` al pasar a producción | `src/data/site.ts` → `noindex: false` |
| Título, descripciones, palabras clave y URL pública (para vistas previas al compartir) | `src/data/site.ts` |
| Colores, radios y tipografía (tokens) | `src/styles/global.css` (bloque `@theme`) |
| Textos de la página Nosotros | `src/components/nosotros/` y los compromisos en `src/pages/nosotros.astro` |
| Envío de formularios (hoy en modo demo) | `src/lib/submitForm.ts` |
| Validación de formularios y la barra de cotización rápida | `src/scripts/forms.ts` |

El correo está vacío en `site.ts`; mientras siga vacío no aparece en el sitio.

Los formularios **todavía no envían nada**: validan en el navegador y muestran el mensaje de éxito.
Para conectarlos, complete la función `submitForm` (ver el `TODO`).

## Estructura

```
src/
  assets/       logo y fotos (Astro las optimiza a AVIF/WebP)
  components/   una pieza por sección (Nav, Hero, Services, Route, About, formularios, Footer)
    nosotros/   secciones propias de la página Nosotros
  lib/url.ts    arma enlaces entre páginas respetando BASE_PATH
  data/site.ts  datos del negocio
  layouts/      <head> y estructura base
  lib/          envío de formularios
  pages/        index.astro (portada) y nosotros.astro (/nosotros/)
  scripts/      JS de formularios
  styles/       fuente Sora y tokens de diseño
public/         favicon
reference/      diseño aprobado (HTML + captura), prompt original y logo fuente — no se publica
```
