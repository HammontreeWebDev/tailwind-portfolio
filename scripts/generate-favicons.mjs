import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const markSvg = readFileSync(join(root, 'public/brand/hammontree-logo-mark.svg'));

const CANVAS = { r: 10, g: 20, b: 22, alpha: 1 };

async function renderIcon(size) {
  const markSize = Math.round(size * 0.78);
  const markPng = await sharp(markSvg).resize(markSize, markSize).png().toBuffer();

  return sharp({
    create: { width: size, height: size, channels: 4, background: CANVAS },
  })
    .composite([{ input: markPng, gravity: 'center' }])
    .png()
    .toBuffer();
}

const png32 = await renderIcon(32);
const png16 = await renderIcon(16);
const png180 = await renderIcon(180);

writeFileSync(join(root, 'app/icon.png'), png32);
writeFileSync(join(root, 'app/apple-icon.png'), png180);

const ico = await pngToIco([png16, png32]);
writeFileSync(join(root, 'app/favicon.ico'), ico);
writeFileSync(join(root, 'public/img/favicon.ico'), ico);
writeFileSync(join(root, 'public/favicon.ico'), ico);

console.log('Generated app/icon.png, app/apple-icon.png, app/favicon.ico');
