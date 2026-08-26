# Fotos del catálogo

Todas las imágenes de esta carpeta salieron del catálogo oficial de la marca,
**«CATÁLOGO DETAL ACT.pdf»** (20 páginas). Se extrajeron los archivos originales
incrustados en el PDF, no capturas de pantalla, así que conservan la resolución
que Lissy subió a Canva.

Formato: **WebP**, lado mayor máximo 1400 px, calidad 82. Las 54 imágenes suman
unos 3,5 MB (67 KB de promedio), así que ninguna necesita recorte adicional.

## Qué hay en cada carpeta

| Carpeta | Qué contiene | Página del PDF |
| --- | --- | --- |
| `coleccion/` | Las 24 referencias con precio. Los archivos `*-detalle`, `*-puesto` y similares son la segunda foto, la que aparece al pasar el mouse sobre la tarjeta. | 4–5, 7, 10–19 |
| `estampados/` | Los 9 estampados de diseño propio, en muestra plana de la tela. | 8–9 |
| `tamanos/` | Guía de tamaños: la misma modelo con Petit, Pequeña y Mediana, en cola y en muñeca, más dos comparativas. | 6–7 |
| `colores/` | Fotos reales del inventario que acompañan la carta de colores. | 4, 11–12, 17–19 |
| `marca/` | Retrato de Nisley M. (fundadora) y el patrón de lazos de la portada. | 1–2 |

## Cómo se recortan

Las fotos del catálogo son verticales (formato historia) y las tarjetas del sitio
son cuadradas. El recorte lo hace `object-cover` en `Foto.astro`, que centra la
imagen — se verificó una por una que el producto quede dentro del cuadro.

Si alguna queda mal encuadrada, no hace falta reeditar el archivo: pon el campo
`foco` del producto en `src/data/site.ts` con un valor de `object-position`, por
ejemplo `foco: 'center 30%'`.

## Para reemplazar una foto

1. Guarda el archivo nuevo con el mismo nombre y extensión, en la misma carpeta.
2. Si cambias el nombre o la extensión, actualiza la ruta en `src/data/site.ts`.
3. Revisa el `alt`: está escrito describiendo la foto actual.

Recomendado: cuadrado 1:1 o vertical 3:4, 1200 px de lado como máximo y menos de
250 KB por archivo.

## Notas

- **`coleccion/rosa-tulipanes.webp`** — en el PDF, la foto de arriba de esa página
  es un pantallazo de un reel con la interfaz de la app y una marca de agua ajena
  («RF»). No se usó. En su lugar va la foto de la misma pieza que estaba en el
  bloque de colores, que es propia y de mayor resolución.
- **`estampados/estrellas.webp`** aparece dos veces en el PDF (páginas 8 y 9); se
  guardó una sola vez.
- La carta de color de scrunchies se repite igual en las páginas 4 y 5, así que
  también quedó un solo archivo: `colores/scrunchies.webp`.

## Imagen para compartir (Open Graph)

`public/og-lissy-monos.png` se genera desde `public/og-lissy-monos.svg`. Si editas
el SVG, vuelve a exportarlo con:

```bash
node scripts/generar-imagenes.mjs
```

Ese mismo comando regenera el `apple-touch-icon` y los iconos del manifest a
partir de `public/favicon.svg`.
