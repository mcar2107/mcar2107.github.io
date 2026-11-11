// Печатает career/resume.html в career/resume.pdf через headless Chrome.
// Путь к браузеру можно переопределить через CHROME_PATH.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const input = resolve(root, 'career/resume.html');
const output = resolve(root, 'career/resume.pdf');

const chrome = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((path) => path && existsSync(path));

if (!chrome) {
  console.error('Chrome не найден. Укажите путь в CHROME_PATH.');
  process.exit(1);
}

// Chrome шумит в stderr даже при успехе — показываем вывод только при ошибке.
try {
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--print-to-pdf=${output}`,
      pathToFileURL(input).href,
    ],
    { stdio: 'pipe' },
  );
} catch (error) {
  process.stderr.write(error.stderr ?? '');
  process.exit(1);
}

console.log(`Готово: ${output}`);
