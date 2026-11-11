// Печатает career/resume.html в career/resume.pdf через Puppeteer.
// Браузер Puppeteer скачивает сам; свой можно указать через PUPPETEER_EXECUTABLE_PATH.
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer';

const root = resolve(import.meta.dirname, '..');
const input = resolve(root, 'career/resume.html');
const output = resolve(root, 'career/resume.pdf');

const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(input).href, { waitUntil: 'load' });
  // Размер листа и поля берутся из @page в resume.html.
  await page.pdf({ path: output, preferCSSPageSize: true });
} finally {
  await browser.close();
}

console.log(`Готово: ${output}`);
