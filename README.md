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
| `src/data/content.ts` | весь текст сайта на русском: профиль, кейсы, проекты, стек |
| `src/data/content.en.ts` | то же на английском |
| `src/i18n.ts` | языки, адреса версий (`/` и `/en/`), подписи интерфейса |
| `src/pages/[...lang].astro` | разметка страницы, собирается для каждого языка |
| `src/components/` | шапка, карточка кейса, блок проекта |
| `src/lib/typograf.ts` | типографирование строк (неразрывные пробелы, кавычки, тире) |
| `public/projects/` | превью проектов |

Чтобы поправить текст, достаточно отредактировать `src/data/content.ts` и `src/data/content.en.ts`.

Язык выбирается в браузере до отрисовки: сначала выбранный кнопкой в шапке, потом первый поддерживаемый из языков браузера, иначе английский.

## Деплой

Push в `main` собирает сайт и публикует его на GitHub Pages через [withastro/action](https://github.com/withastro/action) (`.github/workflows/deploy.yml`).
