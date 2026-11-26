/**
 * Arma rutas internas respetando `base` (BASE_PATH), para que los enlaces entre
 * páginas funcionen aunque el sitio se publique en un subdirectorio.
 *
 *   href('')            → '/'            (portada)
 *   href('#cotizar')    → '/#cotizar'
 *   href('nosotros/')   → '/nosotros/'
 */
export function href(path = ''): string {
  const base = import.meta.env.BASE_URL;
  const root = base.endsWith('/') ? base : `${base}/`;
  return `${root}${path.replace(/^\//, '')}`;
}
