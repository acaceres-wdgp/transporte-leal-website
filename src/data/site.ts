/**
 * Datos del negocio. Cambie aquí y se actualiza en todo el sitio.
 */
export const site = {
  name: 'Transporte Leal',
  city: 'Santiago',
  country: 'República Dominicana',
  since: 2009,
  phone: {
    display: '(809) 576-6705',
    href: 'tel:+18095766705',
  },
  /** Correo de contacto. Mientras esté vacío no se muestra en el sitio. */
  email: '',

  title: 'Transporte Leal — Transporte de carga en Santiago',
  description:
    'Nos especializamos en mover carga portuaria hacia la ciudad. Equipo propio, choferes con experiencia y un contacto directo con quien lleva su carga.',

  /**
   * Servidor de prueba: true agrega <meta name="robots" content="noindex, nofollow">.
   * Cámbielo a false al pasar a producción.
   */
  noindex: true,
} as const;

export const cargoOptions = ["Contenedor 20'", "Contenedor 40'", 'Carga general'] as const;
export const jobOptions = ['Chofer', 'Ayudante', 'Operaciones'] as const;
