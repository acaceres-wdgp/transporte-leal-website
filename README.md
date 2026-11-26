# Transporte Leal — sitio web

Sitio de una sola página de Transporte Leal (propuesta de diseño 2a "Ruta").
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
| Título y meta description | `src/data/site.ts` |
| Colores, radios y tipografía (tokens) | `src/styles/global.css` (bloque `@theme`) |
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
  data/site.ts  datos del negocio
  layouts/      <head> y estructura base
  lib/          envío de formularios
  pages/        index.astro
  scripts/      JS de formularios
  styles/       fuente Sora y tokens de diseño
public/         favicon
reference/      diseño aprobado (HTML + captura), prompt original y logo fuente — no se publica
```
