# Prompt para Claude Code — Sitio web Transporte Leal (propuesta 2a "Ruta")

> Pega este archivo completo como primer mensaje en Claude Code, desde la raíz del repo nuevo
> donde copiaste las carpetas `assets/` y `reference/` de este paquete.

---

## Contexto

Vas a construir la **versión inicial (demo)** del sitio web de **Transporte Leal**, una empresa familiar
de transporte de carga de Santiago, República Dominicana (desde 2009), que mueve contenedores y carga
general desde el puerto hacia la ciudad.

El cliente aprobó la propuesta de diseño **2a "Ruta — moderno y luminoso"**: blanco y celeste,
tarjetas redondeadas y la ruta puerto → ciudad como recurso gráfico.

Esta versión se va a subir a un **servidor de prueba para mostrarla al cliente**. El alcance es solo lo
que está en el diseño: **no agregues funciones extra** (nada de analítica, botón flotante de WhatsApp,
chat, blog, schema, multi-idioma, etc.).

Idioma del sitio: español (`lang="es-DO"`), trato de "usted".

## Fuente de verdad del diseño

- `reference/design-2a.html`: mockup de escritorio a 1280px, convertido a HTML plano. Usa sus
  colores, tamaños de letra, radios, espaciados, textos y orden de secciones **tal cual**.
  No es código de producción: reescríbelo con componentes y clases, no copies los estilos en línea.
- `reference/design-2a-desktop.png`: captura de esa referencia (la tipografía de la captura es
  de respaldo; la real es **Sora**).
- Solo existe el diseño de escritorio. La versión **móvil y tablet la defines tú** siguiendo
  las reglas de "Responsive" más abajo.

## Stack

- **Astro** (salida 100 % estática) + **Tailwind CSS**. Es un sitio que casi no va a cambiar.
- `npm run build` debe generar una carpeta `dist/` con HTML/CSS/JS/imágenes que se pueda subir a
  **cualquier** hosting estático o servidor web (todavía no está definido cuál). Usa rutas relativas
  o configurables (`base` en `astro.config`) para que funcione aunque se publique en un subdirectorio.
  No agregues configuración de ningún proveedor de hosting.
- Fuente: Sora (300, 400, 600, 700), autoalojada con `@fontsource/sora` (no Google Fonts por CDN).
- Sin librerías de UI ni de iconos. JS mínimo: solo el menú móvil y el comportamiento de los formularios.
- Fija versiones exactas en `package.json`.

## Tokens de diseño

Defínelos en `tailwind.config` (o como variables CSS) y úsalos en todo el sitio:

| Token | Valor | Uso |
|---|---|---|
| `white` | `#FFFFFF` | Fondo principal |
| `mist` (Niebla) | `#EEF5FB` | Tarjetas, inputs, píldora del menú |
| `sky` (Celeste Leal) | `#5EA2CE` | Acentos, puntos de la ruta, bloque "Maneje con nosotros" |
| `sky-text` | `#2B76AB` | **Celeste para texto pequeño** (ver Accesibilidad) |
| `navy` (Marino) | `#232F6B` | Botones primarios, bloque "La ruta", degradado del hero |
| `peach` (Durazno) | `#F4C673` | CTA "Cotizar ahora", primer punto de la ruta |
| `ink` | `#1B2350` | Texto principal |
| `ink-muted` | `#4A5078` | Párrafos secundarios |
| `ink-dark` | `#14161F` / `#0E1020` | Texto sobre durazno/celeste, botón "Postular" |
| `on-navy-muted` | `#C9D2EA` | Texto secundario sobre marino |
| `line` | `#E3EAF2` | Bordes y divisores |
| `placeholder` | `#7A84A8` | Texto de placeholder |

- Radios: 999px (píldoras/botones), 28px (bloques grandes, hero), 24px (tarjetas de servicio), 22px (barra del hero), 16px (imágenes internas, CTA del hero), 14px (inputs).
- Títulos: Sora 600 con `letter-spacing` negativo (−0.045em en el H1 de 92px; −0.04em en H2 de 40–48px). La segunda mitad de algunos títulos va en Sora 300 ("sin desvíos.", "desde 2009.") o en celeste ("bien hecho.").
- La sombra y el fondo gris de la referencia son solo de la maqueta; en el sitio real el fondo de página es blanco.

## Estructura (una sola página, en este orden)

1. **Nav**: logo (44px) + "Transporte Leal"; menú en píldora `mist` (Inicio, Servicios, Nosotros, Empleo) con el ítem activo en blanco; botón marino "Cotizar traslado". Los enlaces hacen scroll suave a sus secciones.
2. **Hero** (680px de alto, radio 28px): foto `containers-sky.jpg`, degradado marino de arriba hacia abajo, etiqueta translúcida "Transporte de carga en Santiago · Desde 2009", H1 "Del puerto a su puerta, *sin desvíos.*".
   Abajo, **barra blanca de cotización rápida** con Origen / Destino / Carga + botón durazno "Cotizar ahora →". Que sean tres campos reales (Origen con valor por defecto "Muelle / terminal", Destino, selector de carga) y que el botón lleve al formulario de cotización con esos valores ya llenos.
3. **Intro**: H2 "Un servicio, bien hecho." + párrafo en Sora 300.
4. **Servicios** (`#servicios`): 3 tarjetas `mist` con foto: Contenedores (`containers-stack.jpg`), Carga general (`port-aerial.jpg`), Reparto en Santiago (`trucks-freeway.jpg`).
5. **La ruta de su carga**: bloque marino con 4 pasos unidos por una línea punteada celeste (Solicitud → Retiro en muelle → En ruta → Entrega). Primer punto durazno, dos celestes, último blanco. Es el recurso gráfico central de la propuesta: cuídalo.
6. **Nosotros** (`#nosotros`): tarjeta `mist` con el sello (88px), "Familia Leal, *desde 2009.*" y texto del fundador + foto `trucks-three.jpg`.
7. **Formularios** (lado a lado en escritorio):
   - **Cotice su traslado** (`#cotizar`): Nombre, Empresa, Teléfono/WhatsApp, Tipo de carga (Contenedor 20', Contenedor 40', Carga general), Origen, Destino. Botón "Enviar solicitud". Éxito: "Recibido. Le contactamos hoy mismo."
   - **Maneje con nosotros** (`#empleo`, fondo celeste): Nombre completo, Teléfono, Cargo (Chofer, Ayudante, Operaciones). Botón "Postular". Éxito: "Postulación recibida. ¡Gracias!"
8. **Footer**: logo + nombre, teléfono (enlace `tel:`) y ciudad, © año actual.

Todos los textos están en `reference/design-2a.html`. Usa esos textos; no inventes copy nuevo.

## Formularios — modo demo

El envío **todavía no está definido**. Para esta versión:
- Validación en el navegador (campos obligatorios y formato de teléfono).
- Al enviar, **no se manda nada a ningún lado**: se muestra el mensaje de éxito en línea, como en el diseño.
- Centraliza el envío en una sola función (p. ej. `src/lib/submitForm.ts`) que hoy solo resuelve con éxito,
  con un comentario `// TODO: conectar envío real` para enchufar después el destino que se defina.

## Responsive

- ≥1280px: igual a la referencia, contenido centrado con ancho máximo 1280px y padding exterior de 20px.
- Tablet (768–1279px): servicios en 2 columnas, formularios apilados, pasos de la ruta en 2×2, H1 ~64px.
- Móvil (<768px): menú en botón hamburguesa (panel con los 4 enlaces + "Cotizar traslado"); hero de ~560px con H1 ~44px; barra de cotización rápida apilada debajo de la foto (no superpuesta); servicios en 1 columna; pasos de la ruta en vertical con la línea punteada vertical a la izquierda; Nosotros con la foto debajo del texto; formularios a 1 columna.

## Accesibilidad (sin cambiar el look)

- Cada input lleva un `<label>` (visualmente oculto con `sr-only` para conservar el diseño de solo placeholder).
- El celeste `#5EA2CE` sobre blanco no llega al contraste mínimo para texto pequeño: usa `sky-text` `#2B76AB` en las etiquetas "ORIGEN / DESTINO / CARGA" y en "bien hecho.". El celeste original se queda para fondos, puntos y líneas.
- Fotos decorativas con `alt=""`; el sello con `alt="Sello de Transporte Leal"`.
- Foco visible en enlaces, botones y campos. Navegable con teclado (incluido el menú móvil).
- Un solo `h1` y jerarquía de títulos correcta.

## Lo básico de publicación

- Imágenes optimizadas con `<Image>` de Astro (WebP/AVIF, `srcset`, lazy salvo el hero).
- `<title>` "Transporte Leal — Transporte de carga en Santiago" y una meta description a partir del texto de la intro.
- Favicon desde `assets/brand/favicon-64.png`.
- Como es un **servidor de prueba**, agrega `<meta name="robots" content="noindex, nofollow">` controlado por una variable en `site.ts` para quitarlo fácil al pasar a producción.

## Datos del negocio

Centralízalos en `src/data/site.ts` para cambiarlos en un solo lugar:

- Nombre: **Transporte Leal**
- Ciudad: **Santiago, República Dominicana**
- Teléfono: **(809) 576-6705** → `tel:+18095766705`
- Correo: todavía no definido. Deja el campo en `site.ts` vacío y **no lo muestres** en el sitio mientras esté vacío.
- Desde: **2009**

## Assets

```
assets/
  brand/
    logo-1024.png      ← logo oficial "Transporte Leal", fondo transparente
    logo-256.png       ← para nav, footer y tarjeta Nosotros
    favicon-64.png
    logo-original.pdf  ← archivo fuente del cliente (CorelDRAW), solo referencia
  img/
    containers-sky.jpg   → hero
    containers-stack.jpg → servicio Contenedores
    port-aerial.jpg      → servicio Carga general
    trucks-freeway.jpg   → servicio Reparto en Santiago
    trucks-three.jpg     → Nosotros
```
Usa **solo** este logo. Las fotos son de Pexels (licencia libre). Muévelas a `src/assets/` para que Astro las optimice.

## Forma de trabajar

1. Lee `reference/design-2a.html` y mira la captura antes de escribir código.
2. Propón la estructura de carpetas y componentes y espera mi OK.
3. Construye sección por sección, empezando por tokens + layout + nav + hero.
4. Al terminar, corre `npm run build`, levanta `dist/` con `npm run preview`, compáralo contra la referencia a 1280px y en móvil (375px) y corrige diferencias.
5. Deja un `README.md` corto: cómo correr en local, cómo compilar, que lo que se sube al servidor es el contenido de `dist/`, y dónde cambiar los datos de contacto y quitar el `noindex`.
