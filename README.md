# Lissy Moños — landing page

Landing de una sola página para **LISSY MOÑOS** ([@lissy_accesorios.co](https://www.instagram.com/lissy_accesorios.co/)),
marca de accesorios para el cabello hechos a mano en Ibagué, Tolima.

Astro 7 · Tailwind CSS 4 · astro-icon · animate.css · sitemap · datos estructurados.
Sitio estático, sin JavaScript de framework: solo tres scripts pequeños.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build estático en dist/
npm run preview
```

---

## De dónde salió el contenido

Todo el texto y la paleta vienen del perfil público de la marca:

| Fuente | Qué aportó |
| --- | --- |
| Bio de Instagram | «LISSY MOÑOS 🌷 Accesorios para el cabello & Cosmetiqueras», materiales de alta calidad, venta al por mayor y al detal |
| [Linktree](https://linktr.ee/LissyM.Accesorios) | El lema «Aquí empieza tu mood bonito ✨🎀☁️🩷», los catálogos (detal y «Navidad de ensueño · Niñas») y los canales |
| [Post DWU60qtETKJ](https://www.instagram.com/p/DWU60qtETKJ/) | Los scrunchies como producto estrella («son sus favoritas») |
| [Post DUo0HxVEZit](https://www.instagram.com/p/DUo0HxVEZit/) | El **Scrunchie Petit**, «la más delgada y práctica de todas», y la invitación a pedir la carta de colores |
| [Post DSGcO6vkRbH](https://www.instagram.com/p/DSGcO6vkRbH/) | La nota de cuidado: nunca recoger el cabello mojado |
| Perfil | Ubicación: Ibagué, Tolima, Colombia |

---

## Antes de publicar

Busca `⚠️ COMPLETAR` en [`src/data/site.ts`](src/data/site.ts). Queda pendiente:

1. **Usuario de TikTok**.
2. **Enlaces directos a los catálogos de Canva** (hoy apuntan al Linktree).
3. **Los hex de la carta de colores**. Los nombres salen del catálogo, pero los códigos de
   color son una aproximación: hay que ajustarlos con la tela real en mano.
4. **Reseñas reales**. Las que vienen son de ejemplo y por eso el bloque `Review` de
   datos estructurados está desactivado en [`src/pages/index.astro`](src/pages/index.astro)
   (`RESENAS_VERIFICADAS = false`). Actívalo solo con reseñas verificables.

El **número de WhatsApp** ya está puesto (`WHATSAPP_NUMERO = '573222096703'`). Si se
vacía, todos los botones caen al Linktree como respaldo.

Además, cambia el dominio en tres sitios: `site` en [`astro.config.mjs`](astro.config.mjs),
el `Sitemap:` de [`public/robots.txt`](public/robots.txt) y el fallback de
[`src/layouts/Layout.astro`](src/layouts/Layout.astro).

---

## Fotos

Las 54 fotos salieron del catálogo oficial en PDF («CATÁLOGO DETAL ACT.pdf»): se
extrajeron los archivos originales incrustados, no capturas. Están en `public/images/`,
en WebP, y suman 3,5 MB. El detalle de qué página vino cada una está en
[`public/images/README.md`](public/images/README.md).

Si a un producto le falta foto, la tarjeta dibuja la ilustración SVG de la marca con el
color de ese producto, así que la página nunca se ve rota.

---

## Rutas

El sitio dejó de ser una sola página: el catálogo tiene navegación propia.

| Ruta | Qué es |
| --- | --- |
| `/` | Portada. Presenta las categorías y seis referencias destacadas, y de ahí manda al catálogo. |
| `/catalogo` | Las 24 referencias con buscador, filtro por categoría, orden por precio y «solo disponibles». Los filtros quedan en la URL (`?cat=mono&q=terciopelo`) para poder compartirlos. |
| `/catalogo/[categoria]` | Una página por categoría: `scrunchies`, `monos-y-lazos`, `flores`, `balacas`, `pinzas`, `cosmetiqueras`. |
| `/producto/[id]` | Ficha de cada referencia: galería, precio, colores, condiciones y el botón de pedido. |

Los filtros son JavaScript de navegador sobre el HTML ya renderizado: si el JS no carga,
se siguen viendo las 24 referencias.

---

## Pedidos por WhatsApp

Cada referencia tiene un código (`LM-SCR-01`, `LM-MON-07`…) en el campo `ref`. El botón
«Pedir por WhatsApp» arma un enlace `wa.me` normal con el mensaje ya escrito en el
parámetro `text` — sin API, sin integraciones, sin backend:

```
https://wa.me/573222096703?text=Hola%20Lissy%20Mo%C3%B1os%20%F0%9F%8E%80%20Quiero%20pedir
%20la%20referencia%20LM-SCR-01%20%E2%80%94%20Scrunchie%20Petit%20($4.200%20la%20unidad)...
```

La clienta solo pulsa enviar, y a Lissy le llega la referencia exacta que eligió. Si el
producto está agotado, el mensaje cambia solo a «¿me avisas cuando vuelva a haber?».

Se arma en `mensajePedido()` y `whatsappProducto()` de
[`src/data/site.ts`](src/data/site.ts), y lo pinta
[`src/components/BotonPedir.astro`](src/components/BotonPedir.astro).

---

## Dirección de diseño

**Atelier de telas.** La página se comporta como el muestrario de una costurera: bordes
de puntada, códigos de tono en monoespaciada y una carta de colores como sección propia.

- **Elemento firma:** el moño del hero cambia de color al tocar un tono, y el halo de la
  sección se retiñe con él. Es la promesa de la marca —«escríbeme y te envío todos
  nuestros colores disponibles»— convertida en interacción.
- **Paleta:** rosa `#F2789F`, rubor `#FDE7EE`, crema `#FFFBF7`, nube `#BBD9EF`,
  lila `#CDBDEA`, oro `#C79A4B`, tinta `#4A2A38`. Definida en
  [`src/styles/global.css`](src/styles/global.css) dentro de `@theme`.
- **Tipografías:** Fraunces para títulos (con los ejes `SOFT 100` y `WONK 1`, que dan
  terminales blandas, lo más cercano al satín que da una serif), Karla para el texto y
  DM Mono para códigos y etiquetas.
- **Numeración:** solo en «Cómo comprar», porque ahí el orden sí es información.

---

## Estructura

```
src/
├── components/
│   ├── Arte.astro             Ilustraciones SVG (moño, scrunchie, cosmetiquera)
│   ├── Foto.astro             Foto real si existe; si no, la ilustración
│   ├── Encabezado.astro       Nav fija con submenú de categorías + menú móvil
│   ├── Portada.astro          Hero con el moño que cambia de color
│   ├── Cinta.astro            Cinta con mensajes en marquesina
│   ├── Beneficios.astro       Por qué comprar aquí
│   ├── Categorias.astro       Las seis categorías, en portada
│   ├── Destacados.astro       Seis referencias destacadas, en portada
│   ├── TarjetaProducto.astro  Tarjeta de una referencia (catálogo y portada)
│   ├── FiltroCatalogo.astro   Buscador, filtro por categoría, orden y stock
│   ├── BotonPedir.astro       Botón wa.me con la referencia del producto
│   ├── MigasDePan.astro       Migas de pan
│   ├── Estampados.astro       Los nueve estampados propios
│   ├── Tamanos.astro          Guía de tamaños de scrunchies
│   ├── Colores.astro          Carta de colores + fotos del inventario
│   ├── Cuidado.astro          Nota de cuidado del feed
│   ├── Fundadora.astro        Quién está detrás de la marca
│   ├── Comprar.astro          Los tres pasos + catálogos
│   ├── Mayor.astro            Venta al por mayor
│   ├── Feed.astro             Galería enlazada a Instagram
│   ├── Resenas.astro          Testimonios
│   ├── Preguntas.astro        FAQ en acordeón
│   ├── Cierre.astro           Llamado final
│   ├── PieDePagina.astro      Pie
│   ├── BotonWhatsapp.astro    Botón flotante
│   └── Titulo.astro           Encabezado de sección reutilizable
├── data/site.ts               Todo el contenido editable
├── layouts/Layout.astro       SEO, Open Graph, JSON-LD, tipografías
├── pages/
│   ├── index.astro            Portada
│   ├── 404.astro
│   ├── catalogo/index.astro   Catálogo completo con filtros
│   ├── catalogo/[categoria].astro
│   └── producto/[id].astro    Ficha de cada referencia
├── scripts/revelar.ts         Revelado al scroll con animate.css
└── styles/global.css          Tokens de Tailwind 4 y animaciones
```

---

## SEO

- Título, descripción, canónica y `robots` por página.
- Open Graph y Twitter Card completos, con imagen 1200×630 propia.
- `lang="es-CO"`, `geo.region=CO-TOL`, `geo.placename`.
- JSON-LD: `Store` (con dirección, `founder`, `sameAs` y `makesOffer` por referencia),
  `WebSite`, `FAQPage`, `ItemList` en catálogo y categorías, `BreadcrumbList` en todas las
  páginas internas y `Product` con `sku`, `offers` y disponibilidad en cada ficha.
- `sitemap-index.xml` generado en build y declarado en `robots.txt`.
- Manifest, favicon SVG y `apple-touch-icon`.
- HTML semántico, saltar al contenido, foco visible, `alt` en todo, y
  `prefers-reduced-motion` respetado en todas las animaciones.

Para regenerar el PNG social y los iconos después de editar los SVG:

```bash
node scripts/generar-imagenes.mjs
```

---

## Desplegar

Sitio estático: `npm run build` deja todo en `dist/`. Sirve tal cual en Netlify,
Vercel, Cloudflare Pages o GitHub Pages. Solo recuerda cambiar `site` en
`astro.config.mjs` antes de compilar, porque de ahí salen la canónica, las URLs
absolutas de Open Graph y el sitemap.
