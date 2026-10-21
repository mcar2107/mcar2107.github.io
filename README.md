# mcar2107.github.io

Сайт-портфолио Макара Короленко, frontend-разработчика: https://mcar2107.github.io/

Одна страница на [Astro](https://astro.build): опыт в amoCRM в формате кейсов, свои проекты, стек и контакты.

## Разработка

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # статическая сборка в dist/
npm run preview   # раздача dist/
```

## Где что лежит

| Путь | Что там |
| --- | --- |
| `src/data/content.ts` | весь текст сайта: профиль, кейсы, проекты, стек |
| `src/pages/index.astro` | разметка страницы |
| `src/components/` | шапка, карточка кейса, блок проекта |
| `src/lib/typograf.ts` | типографирование строк (неразрывные пробелы, кавычки, тире) |
| `public/projects/` | превью проектов |

Чтобы поправить текст, достаточно отредактировать `src/data/content.ts`.

## Деплой

Push в `main` собирает сайт и публикует его на GitHub Pages через [withastro/action](https://github.com/withastro/action) (`.github/workflows/deploy.yml`).
