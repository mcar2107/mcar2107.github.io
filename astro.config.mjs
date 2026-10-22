// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mcar2107.github.io',
  // Fonts API: шрифты раздаются с нашего домена, fallback подгоняется под метрики шрифта,
  // чтобы текст не прыгал при подмене после загрузки
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Onest',
      cssVariable: '--font-onest',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic'],
      fallbacks: ['sans-serif'],
      // Без подмены после загрузки: не успел к первой отрисовке — до следующего захода остаётся fallback
      display: 'optional',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: ['100 800'],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic'],
      fallbacks: ['monospace'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
