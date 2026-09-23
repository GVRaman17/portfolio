import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

const itemsToCopy = [
  'index.html',
  'style.css',
  'script.js',
  'portfolio-data.js',
  'assets',
  'styles',
  'LICENSE'
];

for (const item of itemsToCopy) {
  if (fs.existsSync(item)) {
    fs.cpSync(item, path.join(dist, item), { recursive: true });
    console.log(`Copied ${item} -> dist/${item}`);
  }
}
console.log('Build completed successfully.');
