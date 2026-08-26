/* Utilidad de desarrollo: extrae las ilustraciones SVG del HTML compilado
   y las exporta a PNG para revisarlas de un vistazo.

   node scripts/vista-previa-arte.mjs
*/
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const html = await readFile('dist/index.html', 'utf8');
const svgs = html.match(/<svg viewBox="0 0 200 200"[\s\S]*?<\/svg>/g) ?? [];

await mkdir('.vista-previa', { recursive: true });

const vistos = new Set();
let n = 0;
for (const svg of svgs) {
  const tipo = svg.includes('M34 78') ? 'cosmetiquera' : svg.includes('stroke-width="1.4"') ? 'scrunchie' : 'mono';
  if (vistos.has(tipo)) continue;
  vistos.add(tipo);
  const conNS = svg.includes('xmlns=')
    ? svg
    : svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  const png = await sharp(Buffer.from(conNS), { density: 300 }).resize(400, 400).png().toBuffer();
  await writeFile(`.vista-previa/${tipo}.png`, png);
  console.log(`✓ .vista-previa/${tipo}.png`);
  n++;
}
console.log(`${n} ilustraciones exportadas de ${svgs.length} SVG encontrados.`);
