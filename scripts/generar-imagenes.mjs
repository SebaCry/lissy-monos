/* Convierte los SVG de public/ a los PNG que piden las redes sociales
   y los dispositivos Apple. Usa el sharp que ya trae Astro.

   Ejecuta:  node scripts/generar-imagenes.mjs
*/
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const raiz = path.dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const publico = path.join(raiz, 'public');

const trabajos = [
  { entrada: 'og-lissy-monos.svg', salida: 'og-lissy-monos.png', ancho: 1200, alto: 630 },
  { entrada: 'favicon.svg', salida: 'apple-touch-icon.png', ancho: 180, alto: 180 },
  { entrada: 'favicon.svg', salida: 'icon-192.png', ancho: 192, alto: 192 },
  { entrada: 'favicon.svg', salida: 'icon-512.png', ancho: 512, alto: 512 },
];

for (const { entrada, salida, ancho, alto } of trabajos) {
  const svg = await readFile(path.join(publico, entrada));
  const png = await sharp(svg, { density: 300 }).resize(ancho, alto, { fit: 'contain' }).png().toBuffer();
  await writeFile(path.join(publico, salida), png);
  console.log(`✓ ${salida} (${ancho}×${alto})`);
}
