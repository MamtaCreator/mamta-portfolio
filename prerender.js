// Writes the rendered page into dist/index.html so search engines see the full
// content (name, headings, projects) without running JavaScript.
import fs from 'node:fs';
import { render } from './dist-ssr/entry-server.js';

const file = 'dist/index.html';
const html = fs.readFileSync(file, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found in dist/index.html');
fs.writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
fs.rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerendered dist/index.html');
