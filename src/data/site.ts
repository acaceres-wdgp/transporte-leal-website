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

  /**
   * Dirección pública del sitio, sin barra final. Se usa para la URL canónica y
   * para las vistas previas al compartir el enlace (WhatsApp, Facebook, etc.).
   * Cámbiela cuando el sitio tenga su dominio definitivo.
   */
  url: 'https://transporte-leal-website-mq1c7cuc.on-forge.com',

  title: 'Transporte Leal — Transporte de carga en Santiago',
  description:
    'Nos especializamos en mover carga portuaria hacia la ciudad. Equipo propio, choferes con experiencia y un contacto directo con quien lleva su carga.',

  /** Texto de la vista previa al compartir el enlace. */
  shareDescription:
    "Transporte de contenedores de 20' y 40' y carga general desde el puerto hasta Santiago, República Dominicana. Empresa familiar desde 2009. Cotice su traslado.",

  keywords: [
    'transporte de carga',
    'transporte de contenedores',
    'contenedores 20 y 40 pies',
    'carga portuaria',
    'retiro en muelle',
    'carga general',
    'reparto en Santiago',
    'camiones de carga',
    'Santiago de los Caballeros',
    'República Dominicana',
  ],

  /**
   * Servidor de prueba: true agrega <meta name="robots" content="noindex, nofollow">.
   * Cámbielo a false al pasar a producción.
   */
  noindex: true,
} as const;

export const cargoOptions = ["Contenedor 20'", "Contenedor 40'", 'Carga general'] as const;
export const jobOptions = ['Chofer', 'Ayudante', 'Operaciones'] as const;
