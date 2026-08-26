/* ------------------------------------------------------------------
   Fuente única de contenido de la landing.
   Todo lo editable vive aquí: textos, productos, colores, enlaces.

   Los productos, precios, colores y fotos salen del catálogo oficial
   «CATÁLOGO DETAL ACT.pdf» (20 páginas) que envió Lissy. Las imágenes
   se extrajeron de ese PDF y viven en public/images/ — ver el README
   de esa carpeta para el detalle de qué página vino cada una.

   Los campos marcados con  // ⚠️ COMPLETAR  son suposiciones razonables
   que conviene confirmar con Lissy antes de publicar.
------------------------------------------------------------------- */

export const marca = {
  nombre: 'Lissy Moños',
  nombreLargo: 'LISSY MOÑOS · Accesorios',
  handle: '@lissy_accesorios.co',
  fundadora: 'Nisley M.',
  lema: 'Aquí empieza tu mood bonito',
  lemaLargo: 'Accesorios para el cabello hechos con cariño.',
  descripcion:
    'Moños, scrunchies, balacas, pinzas y cosmetiqueras hechos a mano en Ibagué, Tolima. Materiales de alta calidad, estampados de diseño propio y envíos a toda Colombia. Al por mayor y al detal.',
  /* Textual de la página 2 del catálogo. */
  manifiesto:
    'Cada pieza que diseño lleva un pedacito de mí, porque creo en la belleza que nace del alma. Quiero que cuando uses mis accesorios, te recuerdes lo linda y valiosa que eres.',
  ciudad: 'Ibagué',
  departamento: 'Tolima',
  pais: 'Colombia',
  fundado: '2025',
  foto: '/images/marca/nisley.webp',
} as const;

/* Enlaces --------------------------------------------------------- */

// Número de WhatsApp en formato internacional, sin signos ni espacios.
// Si se deja vacío, todos los botones caen al Linktree como respaldo.
const WHATSAPP_NUMERO = '573222096703';

export const enlaces = {
  linktree: 'https://linktr.ee/LissyM.Accesorios',
  instagram: 'https://www.instagram.com/lissy_accesorios.co/',
  // ⚠️ COMPLETAR: usuario de TikTok. Por ahora apunta al Linktree, donde está el enlace.
  tiktok: 'https://linktr.ee/LissyM.Accesorios',
  // ⚠️ COMPLETAR: enlaces directos a los catálogos de Canva (están dentro del Linktree).
  catalogoDetal: 'https://linktr.ee/LissyM.Accesorios',
  catalogoNavidad: 'https://linktr.ee/LissyM.Accesorios',
} as const;

/** Arma un enlace de WhatsApp con mensaje precargado. */
export function whatsapp(mensaje: string): string {
  if (!WHATSAPP_NUMERO) return enlaces.linktree;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

/* Navegación ------------------------------------------------------
   Las rutas son absolutas porque el sitio ya no es una sola página:
   el catálogo vive en /catalogo y cada referencia en /producto/…
------------------------------------------------------------------- */

export const navegacion = [
  { texto: 'Catálogo', href: '/catalogo' },
  { texto: 'Estampados', href: '/#estampados' },
  { texto: 'Colores', href: '/#colores' },
  { texto: 'Cómo comprar', href: '/#comprar' },
  { texto: 'Al por mayor', href: '/#mayor' },
  { texto: 'Preguntas', href: '/#preguntas' },
] as const;

/* Categorías ------------------------------------------------------
   `ilustracion` dice qué dibujo SVG usa Arte.astro cuando un producto
   todavía no tiene foto. Solo existen tres dibujos, así que las
   categorías nuevas se apoyan en el más parecido.
------------------------------------------------------------------- */

export type Categoria = 'scrunchie' | 'mono' | 'flor' | 'balaca' | 'pinza' | 'cosmetiquera';
export type Ilustracion = 'scrunchie' | 'mono' | 'cosmetiquera';

export type InfoCategoria = {
  id: Categoria;
  /** Trozo de URL: /catalogo/{slug} */
  slug: string;
  nombre: string;
  /** Nombre en singular, para migas de pan y fichas. */
  singular: string;
  lead: string;
  ilustracion: Ilustracion;
  /** Foto de portada de la categoría. */
  foto: string;
  alt: string;
};

export const categorias: InfoCategoria[] = [
  {
    id: 'scrunchie',
    slug: 'scrunchies',
    nombre: 'Scrunchies',
    singular: 'Scrunchie',
    lead: 'Cuatro tamaños, del Petit de todos los días al Grande que se nota. En liso y en estampado propio.',
    ilustracion: 'scrunchie',
    foto: '/images/colores/scrunchies.webp',
    alt: 'Scrunchies de Lissy Moños ordenadas por tono',
  },
  {
    id: 'mono',
    slug: 'monos-y-lazos',
    nombre: 'Moños y lazos',
    singular: 'Moño',
    lead: 'Amarrados a mano, uno por uno. Del maximoño de ocasión a los mini lacitos de diario.',
    ilustracion: 'mono',
    foto: '/images/coleccion/maximono-tradicional.webp',
    alt: 'Maximoños tradicionales en varios colores',
  },
  {
    id: 'flor',
    slug: 'flores',
    nombre: 'Flores',
    singular: 'Flor',
    lead: 'Rosas y tulipanes armados en satín, en pinza o en scrunchie. El accesorio que se lleva la mirada.',
    ilustracion: 'mono',
    foto: '/images/coleccion/rosas-pinza-scrunchie.webp',
    alt: 'Rosas de satín montadas en pinza',
  },
  {
    id: 'balaca',
    slug: 'balacas',
    nombre: 'Balacas',
    singular: 'Balaca',
    lead: 'Base flexible que no se parte como las del mercado, forrada en tela fruncida o trenzada.',
    ilustracion: 'mono',
    foto: '/images/coleccion/balaca-fruncida.webp',
    alt: 'Balacas fruncidas en lila, azul, negro y café',
  },
  {
    id: 'pinza',
    slug: 'pinzas',
    nombre: 'Pinzas',
    singular: 'Pinza',
    lead: 'Para recoger un lado o cerrar un moño bajo. En satín licrado, lisas o estampadas.',
    ilustracion: 'mono',
    foto: '/images/coleccion/pinzas-fruncidas.webp',
    alt: 'Pinzas fruncidas en satín fucsia, estampado de cerezas y blanco',
  },
  {
    id: 'cosmetiquera',
    slug: 'cosmetiqueras',
    nombre: 'Cosmetiqueras',
    singular: 'Cosmetiquera',
    lead: 'Acolchadas, con forro interior y gran capacidad. Todo tu mood en un solo lugar.',
    ilustracion: 'cosmetiquera',
    foto: '/images/coleccion/cosmetiquera.webp',
    alt: 'Cosmetiqueras acolchadas en beige, ovejero rosa y café de flores',
  },
];

/** Dibujo de respaldo para una categoría sin foto. */
export function ilustracionDe(tipo: Categoria): Ilustracion {
  return categorias.find((c) => c.id === tipo)?.ilustracion ?? 'mono';
}

/** Ficha completa de una categoría por su id. */
export function categoriaDe(tipo: Categoria): InfoCategoria {
  return categorias.find((c) => c.id === tipo) ?? categorias[0];
}

/** URL del listado de una categoría. */
export function rutaCategoria(tipo: Categoria): string {
  return `/catalogo/${categoriaDe(tipo).slug}`;
}

/* Colección -------------------------------------------------------
   Nombres y precios tal como aparecen en el catálogo al detal.
   `foto` es opcional: si la dejas vacía, la tarjeta dibuja la
   ilustración SVG de la marca.
------------------------------------------------------------------- */

export type Producto = {
  /** Slug de la URL: /producto/{id} */
  id: string;
  /** Referencia que la clienta menciona por WhatsApp: LM-SCR-01 */
  ref: string;
  nombre: string;
  tipo: Categoria;
  resumen: string;
  detalle: string;
  etiqueta?: string;
  /** Precio unitario como lo escribe el catálogo, ej. '$11.000'. */
  precio?: string;
  /** Unidad de venta: 'unidad', 'par'… */
  unidad?: string;
  /** Combos y variantes: 'Set x 5 · $19.000'. */
  packs?: string[];
  colores?: string[];
  agotado?: boolean;
  tono: string;
  tonoSecundario: string;
  foto?: string;
  fotoAlterna?: string;
  /** object-position cuando el recorte cuadrado no cae bien. */
  foco?: string;
  alt: string;
};

/** Colores base que se repiten en scrunchies, balacas y pinzas. */
const COLORES_BASE = [
  'Negro',
  'Blanco',
  'Crema',
  'Rosado',
  'Rosado quemado',
  'Café',
  'Verde pastel',
  'Azul celeste',
  'Lila aperlado super claro',
  'Terracota claro',
];

export const coleccion: Producto[] = [
  /* --- Scrunchies ------------------------------------------------ */
  {
    id: 'scrunchie-petit',
    ref: 'LM-SCR-01',
    nombre: 'Scrunchie Petit',
    tipo: 'scrunchie',
    resumen: 'La más delgada y práctica de todas.',
    detalle:
      'Sujeta sin marcar y se ve bien hasta en la muñeca. Si ya usabas los otros tamaños, esta se vuelve la de todos los días.',
    etiqueta: 'La más pedida',
    precio: '$4.200',
    unidad: 'unidad',
    packs: ['Set x 5 · $19.000'],
    colores: [...COLORES_BASE, 'Rojo'],
    tono: '#F2789F',
    tonoSecundario: '#FBD3DE',
    foto: '/images/coleccion/scrunchie-petit.webp',
    alt: 'Set de scrunchies Petit de Lissy Moños en vino, crema, blanco, azul y rosado',
  },
  {
    id: 'scrunchie-petit-charm',
    ref: 'LM-SCR-02',
    nombre: 'Scrunchie Petit + Charm',
    tipo: 'scrunchie',
    resumen: 'La Petit, con dije.',
    detalle:
      'La misma scrunchie delgada de siempre, con un charm dorado cosido al frunce. Queda de pulsera cuando no la usas en el cabello.',
    precio: '$11.000',
    unidad: 'unidad',
    tono: '#D9527C',
    tonoSecundario: '#FBD3DE',
    foto: '/images/coleccion/scrunchie-petit-charm.webp',
    alt: 'Scrunchies Petit con charms dorados, usadas en la muñeca',
  },
  {
    id: 'scrunchie-pequena',
    ref: 'LM-SCR-03',
    nombre: 'Scrunchie Pequeña',
    tipo: 'scrunchie',
    resumen: 'El punto medio perfecto.',
    detalle:
      'Recoge más que la Petit sin volverse protagonista. La que más se lleva la gente cuando prueba las tres.',
    precio: '$5.500',
    unidad: 'unidad',
    packs: ['Set x 3 · $15.000'],
    colores: COLORES_BASE,
    tono: '#C97B62',
    tonoSecundario: '#F8C6A6',
    foto: '/images/coleccion/scrunchie-pequena.webp',
    alt: 'Scrunchies pequeñas en rosado, blanco y terracota puestas en la muñeca',
  },
  {
    id: 'scrunchie-mediana',
    ref: 'LM-SCR-04',
    nombre: 'Scrunchie Mediana',
    tipo: 'scrunchie',
    resumen: 'Cuerpo generoso, sin exagerar.',
    detalle:
      'Tela suave y costura reforzada. Recoge el cabello sin halarlo y aguanta el día completo sin aflojarse.',
    precio: '$6.500',
    unidad: 'unidad',
    packs: ['Set x 2 · $12.000'],
    colores: COLORES_BASE,
    tono: '#3F6151',
    tonoSecundario: '#B9E0D0',
    foto: '/images/coleccion/scrunchie-mediana.webp',
    alt: 'Scrunchie mediana en satín verde agua puesta en la muñeca',
  },
  {
    id: 'scrunchie-grande',
    ref: 'LM-SCR-05',
    nombre: 'Scrunchie Grande',
    tipo: 'scrunchie',
    resumen: 'De las que se notan.',
    detalle:
      'Volumen alto en satín, para cabello abundante o para que el recogido sea el accesorio. También funciona de pulsera statement.',
    precio: '$9.000',
    unidad: 'unidad',
    colores: COLORES_BASE,
    tono: '#33456B',
    tonoSecundario: '#BBD9EF',
    foto: '/images/coleccion/scrunchie-grande.webp',
    fotoAlterna: '/images/coleccion/scrunchie-grande-detalle.webp',
    alt: 'Scrunchie grande en satín azul rey puesta en la muñeca',
  },
  {
    id: 'scrunchie-pequena-estampada',
    ref: 'LM-SCR-06',
    nombre: 'Pequeña estampada',
    tipo: 'scrunchie',
    resumen: 'El tamaño pequeño, con estampado propio.',
    detalle:
      'Misma horma de la Pequeña, en telas diseñadas por nosotras. Cerezas, lazos, estrellas, corazones: nada genérico.',
    precio: '$6.000',
    unidad: 'unidad',
    tono: '#D9527C',
    tonoSecundario: '#FBD3DE',
    foto: '/images/coleccion/scrunchie-pequena-estampada.webp',
    alt: 'Scrunchie pequeña estampada con cerezas y lazos sobre fondo rosado',
  },
  {
    id: 'scrunchie-mediana-estampada',
    ref: 'LM-SCR-07',
    nombre: 'Mediana estampada',
    tipo: 'scrunchie',
    resumen: 'La Mediana en estampado de diseño.',
    detalle:
      'El tamaño que más rota, en las telas de la colección propia. Combínala con el moño del mismo estampado.',
    precio: '$7.000',
    unidad: 'unidad',
    tono: '#B99075',
    tonoSecundario: '#F7E2AE',
    foto: '/images/coleccion/scrunchie-mediana-estampada.webp',
    alt: 'Scrunchie mediana estampada en leopardo',
  },
  {
    id: 'scrunchie-tulipan',
    ref: 'LM-SCR-08',
    nombre: 'Scrunchie de tulipán',
    tipo: 'scrunchie',
    resumen: 'Con dos tulipanes que caen.',
    detalle:
      'Scrunchie en satín con cintas largas rematadas en tulipanes armados a mano. Se ve de frente y de espalda.',
    precio: '$11.000',
    unidad: 'unidad',
    colores: ['Crema', 'Rosado', 'Blanco', 'Rojo', 'Negro'],
    tono: '#C4707F',
    tonoSecundario: '#FBD3DE',
    foto: '/images/coleccion/scrunchie-tulipan.webp',
    alt: 'Moño bajo recogido con scrunchie de tulipán en rosado viejo',
  },

  /* --- Flores ---------------------------------------------------- */
  {
    id: 'rosa-tulipanes',
    ref: 'LM-FLO-01',
    nombre: 'Rosa con tulipanes',
    tipo: 'flor',
    resumen: 'Eleva tu look sin esfuerzo.',
    detalle:
      'Una rosa grande armada en satín, con dos cintas que terminan en tulipanes. El accesorio único que no necesita nada más.',
    etiqueta: 'Pieza statement',
    precio: '$22.000',
    unidad: 'unidad',
    colores: ['Crema', 'Rosado', 'Blanco', 'Rojo'],
    tono: '#C4707F',
    tonoSecundario: '#FBD3DE',
    foto: '/images/coleccion/rosa-tulipanes.webp',
    fotoAlterna: '/images/coleccion/rosa-tulipanes-detalle.webp',
    alt: 'Rosa de satín rosada con tulipanes, sostenida en la mano junto a su scrunchie',
  },
  {
    id: 'rosas-pinza-scrunchie',
    ref: 'LM-FLO-02',
    nombre: 'Rosas en pinza o scrunchie',
    tipo: 'flor',
    resumen: 'La misma rosa, en el agarre que prefieras.',
    detalle:
      'Rosa de satín armada pétalo por pétalo. La eliges montada en pinza, para un lado del cabello, o en scrunchie para el recogido.',
    precio: '$20.000',
    unidad: 'unidad',
    colores: ['Crema', 'Rosado', 'Blanco', 'Rojo', 'Negro'],
    tono: '#7E3048',
    tonoSecundario: '#F7E4E8',
    foto: '/images/coleccion/rosas-pinza-scrunchie.webp',
    alt: 'Rosas de satín en rojo, rosa viejo y blanco montadas en pinza',
  },

  /* --- Moños y lazos --------------------------------------------- */
  {
    id: 'maximono-darling',
    ref: 'LM-MON-01',
    nombre: 'Maximoño Darling',
    tipo: 'mono',
    resumen: 'Colas largas, caída de revista.',
    detalle:
      'El moño grande con las colas más largas de la colección. Disponible en los 6 estampados de diseño propio.',
    etiqueta: 'Hecho a mano',
    precio: '$18.000',
    unidad: 'unidad',
    packs: ['Disponible en 6 estampados'],
    tono: '#D9527C',
    tonoSecundario: '#F7E4E8',
    foto: '/images/coleccion/maximono-darling.webp',
    fotoAlterna: '/images/coleccion/maximono-darling-lazos.webp',
    alt: 'Maximoño Darling blanco con corazones rojos puesto en media cola',
  },
  {
    id: 'maximono-tradicional',
    ref: 'LM-MON-02',
    nombre: 'Maximoño tradicional',
    tipo: 'mono',
    resumen: 'El clásico de la casa.',
    detalle:
      'Lazo amarrado a mano con caída firme, en telas lisas. El que combina con todo y sirve para diario o para evento.',
    precio: '$14.000',
    unidad: 'unidad',
    packs: ['Variedad de colores'],
    tono: '#33456B',
    tonoSecundario: '#BBD9EF',
    foto: '/images/coleccion/maximono-tradicional.webp',
    alt: 'Maximoños tradicionales en verde oliva, beige, gris, azul y rosado',
  },
  {
    id: 'maximono-tradicional-estampado',
    ref: 'LM-MON-03',
    nombre: 'Maximoño tradicional estampado',
    tipo: 'mono',
    resumen: 'El clásico, en tela de diseño.',
    detalle:
      'Mismo lazo tradicional en los 8 estampados propios. Se puede pedir a juego con la scrunchie del mismo tono.',
    precio: '$16.000',
    unidad: 'unidad',
    packs: ['8 estampados'],
    tono: '#B99075',
    tonoSecundario: '#F7E2AE',
    foto: '/images/coleccion/maximono-tradicional-estampado.webp',
    alt: 'Maximoño tradicional estampado en leopardo con scrunchie a juego',
  },
  {
    id: 'maximono-doble-terciopelo',
    ref: 'LM-MON-04',
    nombre: 'Maximoño doble en terciopelo',
    tipo: 'mono',
    resumen: 'Dos lazos, uno sobre otro.',
    detalle:
      'Terciopelo de cuerpo grueso montado en doble lazo. Se sostiene solo y no se aplasta con el uso.',
    precio: '$16.000',
    unidad: 'unidad',
    colores: ['Blanco', 'Negro'],
    tono: '#2C2229',
    tonoSecundario: '#F4EDE2',
    foto: '/images/coleccion/maximono-doble-terciopelo.webp',
    alt: 'Maximoño doble en terciopelo blanco sobre una cola de caballo',
  },
  {
    id: 'maximono-barbie',
    ref: 'LM-MON-05',
    nombre: 'Maximoño Barbie aperlado',
    tipo: 'mono',
    resumen: 'Satín con perlas cosidas.',
    detalle:
      'Perlas aplicadas una por una sobre satín. Es el que más piden para grados, matrimonios y sesiones de fotos.',
    etiqueta: 'Para ocasión',
    precio: '$20.000',
    unidad: 'unidad',
    packs: ['Variedad de colores'],
    tono: '#C4707F',
    tonoSecundario: '#FBD3DE',
    foto: '/images/coleccion/maximono-barbie.webp',
    fotoAlterna: '/images/coleccion/maximono-barbie-puesto.webp',
    alt: 'Maximoño Barbie aperlado en satín rosa viejo con perlas',
  },
  {
    id: 'maximono-velvetin',
    ref: 'LM-MON-06',
    nombre: 'Maximoño Velvetin',
    tipo: 'mono',
    resumen: 'Terciopelo, en versión sencilla.',
    detalle:
      'La caída del Velvetin es más suave que la del doble. Ideal si quieres terciopelo sin tanto volumen.',
    precio: '$16.000',
    unidad: 'unidad',
    colores: ['Blanco', 'Negro'],
    tono: '#2C2229',
    tonoSecundario: '#F4EDE2',
    foto: '/images/coleccion/maximono-velvetin.webp',
    alt: 'Maximoño Velvetin en terciopelo blanco puesto en media cola',
  },
  {
    id: 'maximono-corbata',
    ref: 'LM-MON-07',
    nombre: 'Maximoño corbata',
    tipo: 'mono',
    resumen: 'Nudo de corbata, caída ancha.',
    detalle:
      'Armado con nudo central y colas anchas, en satín. Se ve grande sin necesidad de rellenos.',
    precio: '$14.000',
    unidad: 'unidad',
    packs: ['Variedad de colores'],
    agotado: true,
    tono: '#C4707F',
    tonoSecundario: '#FBD3DE',
    foto: '/images/coleccion/maximono-corbata.webp',
    alt: 'Maximoño corbata en satín rosa viejo puesto en media cola',
  },
  {
    id: 'lazo-boutique',
    ref: 'LM-MON-08',
    nombre: 'Lazo Boutique',
    tipo: 'mono',
    resumen: 'Fino, largo y discreto.',
    detalle:
      'Cinta angosta con caída larga para amarrar un moño bajo o una trenza. El más económico de la colección.',
    precio: '$7.000',
    unidad: 'unidad',
    colores: ['Palo de rosa', 'Crema', 'Rojo', 'Azul celeste'],
    tono: '#F2789F',
    tonoSecundario: '#FBD3DE',
    foto: '/images/coleccion/lazo-boutique.webp',
    alt: 'Lazo Boutique en palo de rosa amarrado sobre un moño bajo',
  },
  {
    id: 'lazo-honney',
    ref: 'LM-MON-09',
    nombre: 'Lazo Honney',
    tipo: 'mono',
    resumen: 'Mediano, de colas cortas.',
    detalle:
      'Entre el lacito y el maximoño: se nota sin pesar. Disponible en los 6 estampados de diseño propio.',
    precio: '$14.000',
    unidad: 'unidad',
    packs: ['Disponible en 6 estampados'],
    agotado: true,
    tono: '#D9527C',
    tonoSecundario: '#FBD3DE',
    foto: '/images/coleccion/lazo-honney.webp',
    alt: 'Lazos Honney estampados puestos en media cola',
  },
  {
    id: 'mini-lacitos-tiny',
    ref: 'LM-MON-10',
    nombre: 'Mini lacitos tiny',
    tipo: 'mono',
    resumen: 'Se venden por par.',
    detalle:
      'Lacitos diminutos en pinza, para los lados del cabello. Los favoritos para diario y para las niñas de la casa.',
    precio: '$9.500',
    unidad: 'par',
    colores: ['Blanco', 'Rosado claro', 'Fucsia', 'Azul celeste', 'Azul'],
    tono: '#F8C6A6',
    tonoSecundario: '#FCF3DC',
    foto: '/images/coleccion/mini-lacitos-tiny.webp',
    alt: 'Par de mini lacitos tiny en rosado claro puestos a los lados del cabello',
  },

  /* --- Balacas --------------------------------------------------- */
  {
    id: 'balaca-fruncida',
    ref: 'LM-BAL-01',
    nombre: 'Balaca fruncida',
    tipo: 'balaca',
    resumen: 'Base flexible que no se parte.',
    detalle:
      'La pasta de adentro cede en vez de quebrarse, como sí pasa con otras del mercado. Forrada en tela fruncida.',
    precio: '$15.000',
    unidad: 'unidad',
    colores: COLORES_BASE,
    tono: '#CDBDEA',
    tonoSecundario: '#EBE3F7',
    foto: '/images/coleccion/balaca-fruncida.webp',
    alt: 'Balacas fruncidas en lila, azul, negro y café',
  },
  {
    id: 'balaca-trenzada',
    ref: 'LM-BAL-02',
    nombre: 'Balaca trenzada',
    tipo: 'balaca',
    resumen: 'Trenzada a mano en satín.',
    detalle:
      'La tela se trenza sobre la base antes de cerrarla, así que el relieve no se deshace con el uso.',
    precio: '$18.000',
    unidad: 'unidad',
    colores: COLORES_BASE,
    tono: '#3F6151',
    tonoSecundario: '#B9E0D0',
    foto: '/images/coleccion/balaca-trenzada.webp',
    alt: 'Balacas trenzadas en satín verde, rosa viejo y café',
  },

  /* --- Pinzas ---------------------------------------------------- */
  {
    id: 'pinzas-fruncidas',
    ref: 'LM-PIN-01',
    nombre: 'Pinzas fruncidas',
    tipo: 'pinza',
    resumen: 'Se venden por par.',
    detalle:
      'Satín licrado fruncido sobre pinza metálica. Recogen un lado del cabello o cierran un moño bajo sin resbalarse.',
    precio: '$10.000',
    unidad: 'par',
    packs: ['Estampadas · $11.000 par'],
    colores: ['Verde laurel', 'Beige', 'Guayaba', 'y más en satín licrado'],
    tono: '#B9E0D0',
    tonoSecundario: '#E4F4EC',
    foto: '/images/coleccion/pinzas-fruncidas.webp',
    fotoAlterna: '/images/coleccion/pinzas-fruncidas-verde.webp',
    alt: 'Pinzas fruncidas en satín fucsia, estampado de cerezas y blanco',
  },

  /* --- Cosmetiqueras --------------------------------------------- */
  {
    id: 'cosmetiquera',
    ref: 'LM-COS-01',
    nombre: 'Cosmetiquera',
    tipo: 'cosmetiquera',
    resumen: 'Acolchada y de gran capacidad.',
    detalle:
      'Forro interior, cierre resistente y base que se sostiene sola. Cabe el labial, la base y también los scrunchies.',
    etiqueta: 'Lleva 3 y paga 2',
    precio: '$30.000',
    unidad: 'unidad',
    packs: ['Por 2 cosmetiqueras, la tercera (blanca) va gratis'],
    colores: ['Ovejero rosa y negro', 'Café de flores', 'Beige de rombos', 'Salmón de líneas'],
    tono: '#F7E2AE',
    tonoSecundario: '#FCF3DC',
    foto: '/images/coleccion/cosmetiquera.webp',
    fotoAlterna: '/images/coleccion/cosmetiquera-puesta.webp',
    alt: 'Cosmetiqueras acolchadas en beige, ovejero rosa y café de flores',
  },
];

/** Productos de una categoría, en el orden del catálogo. */
export function productosDe(tipo: Categoria): Producto[] {
  return coleccion.filter((p) => p.tipo === tipo);
}

/** Busca una referencia por su slug de URL. */
export function productoPorId(id: string): Producto | undefined {
  return coleccion.find((p) => p.id === id);
}

/** URL de la ficha de una referencia. */
export function rutaProducto(p: Producto): string {
  return `/producto/${p.id}`;
}

/** Precio como número, para ordenar y para schema.org. '$11.000' -> 11000 */
export function precioEnNumero(precio?: string): number | null {
  if (!precio) return null;
  const n = Number(precio.replace(/\D/g, ''));
  return Number.isFinite(n) && n > 0 ? n : null;
}

/* Pedido por WhatsApp ---------------------------------------------
   Sin API ni integraciones: es el enlace wa.me de toda la vida con el
   mensaje ya escrito en el parámetro `text`. La clienta solo pulsa
   enviar, y a Lissy le llega la referencia exacta que eligió.
------------------------------------------------------------------- */

/** El texto que la clienta va a enviar, con la referencia del producto. */
export function mensajePedido(p: Producto): string {
  // «la unidad» pero «el par»: el artículo depende de la unidad de venta.
  const unidad = p.unidad === 'par' ? 'el par' : p.unidad ? `la ${p.unidad}` : '';
  const precio = p.precio ? ` (${p.precio}${unidad ? ` ${unidad}` : ''})` : '';

  if (p.agotado) {
    return `Hola ${marca.nombre} 🎀 Vi en la página que la referencia ${p.ref} — ${p.nombre} está agotada. ¿Me avisas cuando vuelva a haber?`;
  }
  return `Hola ${marca.nombre} 🎀 Quiero pedir la referencia ${p.ref} — ${p.nombre}${precio}. ¿Qué colores tienes disponibles?`;
}

/** Enlace wa.me listo para el botón «Pedir por WhatsApp». */
export function whatsappProducto(p: Producto): string {
  return whatsapp(mensajePedido(p));
}

/** Otras referencias de la misma categoría, para el pie de la ficha. */
export function relacionados(p: Producto, cuantos = 3): Producto[] {
  const mismos = productosDe(p.tipo).filter((o) => o.id !== p.id);
  if (mismos.length >= cuantos) return mismos.slice(0, cuantos);
  // Si la categoría es pequeña, se completa con el resto del catálogo.
  const otros = coleccion.filter((o) => o.tipo !== p.tipo && o.id !== p.id);
  return [...mismos, ...otros].slice(0, cuantos);
}

/** Referencias que se muestran en la portada. */
export const destacados: string[] = [
  'scrunchie-petit',
  'maximono-barbie',
  'rosa-tulipanes',
  'cosmetiquera',
  'balaca-trenzada',
  'mini-lacitos-tiny',
];

export function productosDestacados(): Producto[] {
  return destacados.map(productoPorId).filter((p): p is Producto => Boolean(p));
}

/* Estampados propios ----------------------------------------------
   Página 8 y 9 del catálogo: «Los estampados son diseñados por
   nosotros mismos, cada uno fue creado con amor para ti».
------------------------------------------------------------------- */

export type Estampado = { id: string; nombre: string; foto: string; alt: string; agotado?: boolean };

export const estampados: Estampado[] = [
  {
    id: 'cerezas-y-lazos',
    nombre: 'Cerezas y lazos',
    foto: '/images/estampados/cerezas-y-lazos.webp',
    alt: 'Estampado de cerezas y lazos sobre fondo rosado',
  },
  {
    id: 'leopardo',
    nombre: 'Leopardo',
    foto: '/images/estampados/leopardo.webp',
    alt: 'Estampado de leopardo en beige, negro y café',
  },
  {
    id: 'flores-de-campo',
    nombre: 'Flores de campo',
    foto: '/images/estampados/flores-de-campo.webp',
    alt: 'Estampado de flores blancas y hojas sobre fondo café',
  },
  {
    id: 'lazos-mantequilla',
    nombre: 'Lazos mantequilla',
    foto: '/images/estampados/lazos-mantequilla.webp',
    alt: 'Estampado de lazos dibujados sobre fondo amarillo mantequilla',
  },
  {
    id: 'lazos-vino',
    nombre: 'Lazos vino',
    foto: '/images/estampados/lazos-vino.webp',
    alt: 'Estampado de lazos blancos sobre fondo vino',
  },
  {
    id: 'cuadros-con-corazones',
    nombre: 'Cuadros con corazones',
    foto: '/images/estampados/cuadros-con-corazones.webp',
    alt: 'Estampado de cuadros beige con corazones pequeños',
  },
  {
    id: 'lunares-terracota',
    nombre: 'Lunares terracota',
    foto: '/images/estampados/lunares-terracota.webp',
    alt: 'Estampado de lunares blancos sobre fondo terracota',
  },
  {
    id: 'estrellas',
    nombre: 'Estrellas',
    foto: '/images/estampados/estrellas.webp',
    alt: 'Estampado de estrellas blancas sobre fondo verde salvia',
    agotado: true,
  },
  {
    id: 'corazones',
    nombre: 'Corazones',
    foto: '/images/estampados/corazones.webp',
    alt: 'Estampado de corazones rojos sobre fondo rosa claro',
    agotado: true,
  },
];

/* Guía de tamaños -------------------------------------------------
   Página 6 y 7 del catálogo: la misma modelo con los tres tamaños,
   en cola y en muñeca, para comparar de verdad.
------------------------------------------------------------------- */

export const guiaTamanos = {
  titulo: 'Los tamaños, uno al lado del otro',
  lead: 'La misma persona, el mismo cabello y la misma luz. Así se ve cada tamaño puesto en la cola y en la muñeca.',
  medidas: [
    {
      id: 'petit',
      nombre: 'Petit',
      texto: 'La más delgada. No marca y se ve bien de pulsera.',
      cola: '/images/tamanos/petit-cola.webp',
      muneca: '/images/tamanos/petit-muneca.webp',
      altCola: 'Scrunchie Petit puesta en una cola de caballo',
      altMuneca: 'Scrunchie Petit puesta en la muñeca',
    },
    {
      id: 'pequena',
      nombre: 'Pequeña',
      texto: 'Un poco más de cuerpo, sin volverse protagonista.',
      cola: '/images/tamanos/pequena-cola.webp',
      muneca: '/images/tamanos/pequena-muneca.webp',
      altCola: 'Scrunchie pequeña puesta en una cola de caballo',
      altMuneca: 'Scrunchie pequeña puesta en la muñeca',
    },
    {
      id: 'mediana',
      nombre: 'Mediana',
      texto: 'La que más rota. Recoge firme y se nota.',
      cola: '/images/tamanos/mediana-cola.webp',
      muneca: '/images/tamanos/mediana-muneca.webp',
      altCola: 'Scrunchie mediana estampada puesta en una cola de caballo',
      altMuneca: 'Scrunchie mediana estampada puesta en la muñeca',
    },
  ],
  comparativa: [
    {
      foto: '/images/tamanos/comparativa-trenza.webp',
      alt: 'Tres tamaños de scrunchie puestos a lo largo de una trenza',
    },
    {
      foto: '/images/tamanos/comparativa-mesa.webp',
      alt: 'Scrunchie grande, mediana y pequeña comparadas sobre la mesa',
    },
  ],
} as const;

/* Carta de colores ------------------------------------------------
   Los nombres salen del catálogo (páginas 4, 5 y 17). Los hex son
   una aproximación para el muestrario en pantalla.
   ⚠️ COMPLETAR: ajusta cada hex con la tela real en mano.
------------------------------------------------------------------- */

export type Tono = { codigo: string; nombre: string; hex: string };

export const cartaDeColores: Tono[] = [
  { codigo: 'LM-01', nombre: 'Blanco', hex: '#FBFAF8' },
  { codigo: 'LM-02', nombre: 'Crema', hex: '#F4EDE2' },
  { codigo: 'LM-03', nombre: 'Rosado', hex: '#F2A8BE' },
  { codigo: 'LM-04', nombre: 'Rosado quemado', hex: '#C4707F' },
  { codigo: 'LM-05', nombre: 'Lila aperlado super claro', hex: '#DCD2EC' },
  { codigo: 'LM-06', nombre: 'Azul celeste', hex: '#BBD9EF' },
  { codigo: 'LM-07', nombre: 'Verde pastel', hex: '#C3D8BE' },
  { codigo: 'LM-08', nombre: 'Terracota claro', hex: '#C97B62' },
  { codigo: 'LM-09', nombre: 'Café', hex: '#8C6551' },
  { codigo: 'LM-10', nombre: 'Rojo', hex: '#B3202F' },
  { codigo: 'LM-11', nombre: 'Negro', hex: '#2C2229' },
];

/** Busca un tono por código. Así los componentes no dependen del orden
    de la carta y no se rompen si agregas o quitas tonos. */
export function tonoPorCodigo(codigo: string): Tono {
  return cartaDeColores.find((t) => t.codigo === codigo) ?? cartaDeColores[0];
}

/** Fotos reales del inventario, para acompañar el muestrario. */
export const fotosDeColor = [
  {
    foto: '/images/colores/scrunchies.webp',
    alt: 'Scrunchies ordenadas por tono, de crema y lila a fucsia y rosado',
  },
  {
    foto: '/images/colores/balacas.webp',
    alt: 'Balacas trenzadas en café, verde y rosa viejo',
  },
  {
    foto: '/images/colores/rosas.webp',
    alt: 'Rosas de satín en rosa viejo y crema',
  },
  {
    foto: '/images/colores/pinzas.webp',
    alt: 'Pinzas fruncidas puestas en distintos peinados',
  },
  {
    foto: '/images/colores/cosmetiquera-interior.webp',
    alt: 'Interior forrado a cuadros de una cosmetiquera acolchada',
  },
] as const;

/* Beneficios ------------------------------------------------------ */

export const beneficios = [
  {
    icono: 'ph:hand-heart-duotone',
    titulo: 'Hechos a mano, uno por uno',
    texto: 'Aquí no hay producción en serie. Cada moño se corta, se cose y se amarra a mano en Ibagué.',
  },
  {
    icono: 'ph:sparkle-duotone',
    titulo: 'Estampados de diseño propio',
    texto: 'Las telas estampadas las diseñamos nosotras. No más accesorios genéricos: sé única, sé tú.',
  },
  {
    icono: 'ph:feather-duotone',
    titulo: 'Sujetan sin maltratar',
    texto: 'No marcan, no parten y evitan el frizz. Recogen firme y salen sin halar ni dejar marca.',
  },
  {
    icono: 'ph:truck-duotone',
    titulo: 'Envíos a toda Colombia',
    texto: 'Domicilio en Ibagué y despacho nacional por Interrapidísimo en 2 a 3 días hábiles.',
  },
] as const;

/* Cómo comprar (página 3 del catálogo) ---------------------------- */

export const pasos = [
  {
    titulo: 'Elige tu accesorio',
    texto: 'Indica referencia, tamaño y color. Si no ves el tono, pregúntanos: el inventario se mueve cada semana.',
  },
  {
    titulo: 'Deja el adelanto',
    texto:
      'En pedidos mayores a $50.000: 50% al pedir y 50% al entregar. Cada accesorio se elabora exclusivamente para ti, así que el adelanto garantiza tu pedido.',
  },
  {
    titulo: 'Recibe tu pedido',
    texto:
      'Elaboración de 2 días hábiles aprox. Recoges en el apartamento, te lo llevamos en Ibagué o lo despachamos por Interrapidísimo.',
  },
] as const;

/* Políticas (página 3 del catálogo) ------------------------------- */

export const politicas = {
  pagos: ['Nequi', 'Daviplata', 'Llaves (sin recargo)'],
  envios:
    'Recoges en apartamento, domicilio en la ciudad o Interrapidísimo fuera de Ibagué (2 a 3 días hábiles). El envío lo asume el cliente.',
  elaboracion: '2 días hábiles aproximadamente, según cantidad y agenda.',
  cambios:
    'Solo si el accesorio llega despegado o dañado. Repórtalo de inmediato o máximo 2 días después de recibirlo.',
  horario: 'Lunes a viernes, 8:00 a. m. a 6:00 p. m.',
} as const;

/* Mayoristas ------------------------------------------------------ */

export const mayor = {
  titulo: 'Al por mayor',
  intro:
    'Si tienes tienda de accesorios, peluquería o vendes por catálogo, trabajamos precios especiales por cantidad.',
  puntos: [
    'Precio mayorista desde tu primer pedido de volumen',
    'Surtido a tu gusto: eliges modelos, tamaños y tonos',
    'Producción por encargo para colecciones y fechas especiales',
    'Reposición continua de los modelos que más te roten',
  ],
} as const;

/* Nota de cuidado (del reel del 10 de diciembre de 2025) ---------- */

export const notaCuidado = {
  eyebrow: 'Del feed',
  titulo: 'Nunca recojas el cabello mojado',
  texto:
    'Ni siquiera con un scrunchie de satín. Mojado está más débil: se quiebra y se maltrata. Primero protector de calor, después secarlo completo, y ahí sí recogerlo. Cuidar el cabello no es solo usar los productos correctos, es saber cuándo usarlos.',
  fuente: 'Publicado en @lissy_accesorios.co',
} as const;

/* Reseñas ---------------------------------------------------------
   ⚠️ COMPLETAR: reemplaza por comentarios reales de clientas (con su permiso).
------------------------------------------------------------------- */

export const resenas = [
  {
    texto: 'Pedí los Petit y ya no uso otra cosa. No me marcan el cabello y me quedan lindos hasta en la muñeca.',
    autora: 'Valentina R.',
    lugar: 'Ibagué',
  },
  {
    texto: 'La calidad de la tela se nota apenas la tocas. Llevo meses con los míos y siguen igualitos.',
    autora: 'Daniela M.',
    lugar: 'Bogotá',
  },
  {
    texto: 'Los moños de mi hija fueron un éxito en el colegio. Ya me encargaron tres juegos más las mamás.',
    autora: 'Carolina P.',
    lugar: 'Espinal',
  },
] as const;

/* Preguntas ------------------------------------------------------- */

export const preguntas = [
  {
    p: '¿Hacen envíos a toda Colombia?',
    r: 'Sí. Fuera de Ibagué despachamos por Interrapidísimo y llega en 2 a 3 días hábiles; el envío lo asume el cliente. En Ibagué manejamos domicilio y también puedes recoger en el apartamento.',
  },
  {
    p: '¿Cómo veo todos los colores disponibles?',
    r: 'En la carta de colores de esta página tienes los tonos base con foto del inventario. Escríbenos por WhatsApp y te mandamos la foto de lo que hay hoy, que se actualiza cada semana.',
  },
  {
    p: '¿Cuál scrunchie me conviene?',
    r: 'La Petit es la más delgada y práctica para el diario. La Pequeña y la Mediana recogen más cabello, y la Grande es la que se nota. En la guía de tamaños las ves puestas una al lado de la otra.',
  },
  {
    p: '¿Tengo que pagar por adelantado?',
    r: 'En pedidos mayores a $50.000 pedimos 50% al hacer el pedido y 50% al entregar. Cada accesorio se elabora exclusivamente para ti, así que el adelanto garantiza tu pedido. Recibimos Nequi, Daviplata y Llaves, sin recargo.',
  },
  {
    p: '¿Cuánto se demora mi pedido?',
    r: 'La elaboración toma 2 días hábiles aproximadamente, según la cantidad y la agenda del taller. Atendemos de lunes a viernes de 8:00 a. m. a 6:00 p. m.',
  },
  {
    p: '¿Puedo cambiar un accesorio?',
    r: 'Hacemos cambio solo si llega despegado o dañado. Repórtalo de inmediato o máximo 2 días después de recibirlo y lo resolvemos.',
  },
  {
    p: '¿Venden al por mayor?',
    r: 'Sí, manejamos precio mayorista y detal. Cuéntanos qué modelos y qué cantidad necesitas y te pasamos la lista de precios por cantidad.',
  },
  {
    p: '¿Cómo lavo mis moños y scrunchies?',
    r: 'A mano, con agua fría y jabón suave. Sin retorcer: presiónalos con una toalla y déjalos secar a la sombra. Así conservan el color y el elástico.',
  },
];

/* Galería de Instagram --------------------------------------------
   Las fotos salen del catálogo (son archivos originales de la marca),
   así que los enlaces apuntan al perfil y no a un post concreto.

   ⚠️ Si quieres enlazar a los posts reales, estos son los IDs que
   estaban en el feed público: DWU60qtETKJ, DUo0HxVEZit, DSGcO6vkRbH.
   Úsalos solo con la foto que de verdad corresponde a cada post.
------------------------------------------------------------------- */

export type ItemFeed = {
  id: string;
  href: string;
  titulo: string;
  alt: string;
  foto?: string;
  tono: string;
  tonoSecundario: string;
  tipo: Categoria;
};

export const feed: ItemFeed[] = [
  {
    id: 'scrunchies-favoritas',
    href: enlaces.instagram,
    titulo: 'Gracias por acogerlas tanto: son sus favoritas',
    alt: 'Scrunchies de Lissy Moños ordenadas por tono',
    foto: '/images/colores/scrunchies.webp',
    tono: '#F2789F',
    tonoSecundario: '#FBD3DE',
    tipo: 'scrunchie',
  },
  {
    id: 'petit',
    href: enlaces.instagram,
    titulo: 'Scrunchie Petit, la más delgada y práctica',
    alt: 'Set de scrunchies Petit en varios tonos',
    foto: '/images/coleccion/scrunchie-petit.webp',
    tono: '#CDBDEA',
    tonoSecundario: '#EBE3F7',
    tipo: 'scrunchie',
  },
  {
    id: 'estampados',
    href: enlaces.instagram,
    titulo: 'Estampados diseñados por nosotras',
    alt: 'Estampado de cerezas y lazos de diseño propio',
    foto: '/images/estampados/cerezas-y-lazos.webp',
    tono: '#D9527C',
    tonoSecundario: '#FBD3DE',
    tipo: 'scrunchie',
  },
  {
    id: 'maximonos',
    href: enlaces.instagram,
    titulo: 'Maximoños amarrados uno por uno',
    alt: 'Maximoños tradicionales en varios colores',
    foto: '/images/coleccion/maximono-tradicional.webp',
    tono: '#33456B',
    tonoSecundario: '#BBD9EF',
    tipo: 'mono',
  },
  {
    id: 'cosmetiqueras',
    href: enlaces.instagram,
    titulo: 'Cosmetiqueras hechas con cariño',
    alt: 'Cosmetiqueras acolchadas en beige, rosa y café',
    foto: '/images/coleccion/cosmetiquera.webp',
    tono: '#F7E2AE',
    tonoSecundario: '#FCF3DC',
    tipo: 'cosmetiquera',
  },
  {
    id: 'flores',
    href: enlaces.instagram,
    titulo: 'Rosas y tulipanes armados a mano',
    alt: 'Rosas de satín montadas en pinza',
    foto: '/images/coleccion/rosas-pinza-scrunchie.webp',
    tono: '#7E3048',
    tonoSecundario: '#F7E4E8',
    tipo: 'flor',
  },
];
