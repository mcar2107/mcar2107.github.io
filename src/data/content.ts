export interface Link {
  label: string;
  href: string;
}

export const profile = {
  name: 'Макар Короленко',
  role: 'Frontend-разработчик',
  location: 'Москва · гибрид, удалённо',
  lead: 'Четыре года делаю фронтенд в amoCRM: корпоративный мессенджер amo для десятков тысяч пользователей, AI-ассистент внутри CRM и агентский конвейер лендингов. Веду задачи от бизнес-требования до прода — в команде нет аналитиков и тестировщиков.',
  contacts: {
    telegram: { label: '@mcar_2107', href: 'https://t.me/mcar_2107' },
    email: { label: 'makar.korolenko2005@mail.ru', href: 'mailto:makar.korolenko2005@mail.ru' },
    github: { label: 'github.com/mcar2107', href: 'https://github.com/mcar2107' },
  },
};

export interface Case {
  id: string;
  title: string;
  product: string;
  context: string;
  done: string[];
  result: string;
  tags: string[];
  links?: Link[];
}

export const job = {
  company: 'amoCRM',
  role: 'Frontend-разработчик',
  period: '10.2022 — сейчас',
  about:
    'amo messenger — offline-first корпоративный мессенджер в вебе и на десктопе, десятки тысяч пользователей. С 2026 года работаю также над amoCRM и промо-направлением. Код коммерческий, поэтому здесь — что было, что я сделал и к чему это привело.',
  links: [
    { label: 'amo.tm', href: 'https://amo.tm' },
    { label: 'amocrm.ru', href: 'https://www.amocrm.ru' },
  ] satisfies Link[],
};

export const cases: Case[] = [
  {
    id: 'landing-agents',
    title: 'Агентский конвейер лендингов',
    product: 'Промо amoCRM',
    context:
      'Лендинги и промо-сайты нужны часто, а держать на каждом разработчика дорого. Задача — чтобы основную работу делал AI-агент, а релиз не требовал разработчика.',
    done: [
      'Декомпозировал компоненты и вынес переиспользуемую библиотеку базового UI',
      'Собрал UI-kit для промо-лендингов и задокументировал его в Storybook как витрину для других разработчиков',
      'Построил окружение для автономной работы агента: автолинтинг, автотесты, скриншотные тесты, Storybook',
      'Написал skill вёрстки по макетам Figma с оптимизацией запросов к Figma MCP',
      'Разработал скиллы для AI-агентов, которыми пользуются все разработчики компании',
      'Перевёл выпуск лендингов на автогенерацию из Markdown-репозитория контента',
      'Выбрал Astro для маркетинговых лендингов по итогам сравнения с Next.js, настроил хостинг на nginx и CI/CD на GitLab CI и Docker',
      'Принимаю решения по промо-сайтам на данных Яндекс Метрики: конверсия, отказы, глубина просмотра',
    ],
    result: 'Лендинг собирает агент в проверяемом окружении, а контент публикуется без участия разработчика.',
    tags: ['Claude Code', 'Figma MCP', 'Astro', 'Storybook', 'GitLab CI', 'Docker', 'nginx'],
    links: [{ label: 'Пример лендинга', href: 'https://pl.amocrm.ru/niche/realty/' }],
  },
  {
    id: 'ai-assistant',
    title: 'AI-ассистент amoCRM',
    product: 'amoCRM',
    context:
      'Ассистент работает в аккаунте пользователя через MCP: отвечает в чате и сам выполняет действия в CRM.',
    done: [
      'Участвовал в разработке интерфейса ассистента: чат, логика обмена с бэкендом, протокол AG-UI, стриминг ответов на SSE',
      'Спроектировал и реализовал onboarding-тур: ассистент квалифицирует клиента в диалоге, сам переключает страницы интерфейса и помогает настроить воронку, источники и поля сделок',
    ],
    result: 'Новый клиент настраивает аккаунт в диалоге с ассистентом, а не по инструкции.',
    tags: ['MCP', 'AG-UI', 'SSE', 'React'],
    links: [{ label: 'amocrm.ru', href: 'https://www.amocrm.ru' }],
  },
  {
    id: 'calls-desktop',
    title: 'Звонки, тёмная тема и desktop',
    product: 'amo messenger',
    context:
      'Мессенджеру не хватало звонков, гибких прав и тёмной темы, а desktop-версии — Linux. Дизайн-токенов в проекте не было: цвета захардкожены по всему коду.',
    done: [
      'С нуля реализовал аудио- и видеозвонки на базе Jitsi',
      'Сделал ролевую модель и права доступа к каналам, реакции и закреплённые сообщения',
      'При внедрении тёмной темы перевёл захардкоженные стили на дизайн-токены и Tailwind',
      'Портировал desktop-версию на Electron под Linux и стабилизировал падавшую сборку',
      'Спроектировал препроцессинг видео с учётом лицензионных ограничений на кодеки',
    ],
    result: 'Звонки, права доступа и тёмная тема в проде, стили на токенах, desktop-клиент работает на Linux.',
    tags: ['Jitsi', 'Electron', 'Дизайн-токены', 'Tailwind', 'WebSocket', 'gRPC'],
    links: [{ label: 'amo.tm', href: 'https://amo.tm' }],
  },
  {
    id: 'team',
    title: 'Сборка команды и техлидство',
    product: 'amo messenger',
    context: 'Прежняя фронтенд-команда ушла, проект на 300\u00a0000 строк остался без людей.',
    done: [
      'Нанял четырёх фронтенд-разработчиков',
      'Выполнял роль техлида: ревью, декомпозиция и распределение задач, технические консультации, онбординг',
    ],
    result: 'Команда восстановлена; двое из нанятых работают со мной до сих пор.',
    tags: ['Найм', 'Code review', 'Онбординг'],
  },
  {
    id: 'infra',
    title: 'Инфраструктура фронтенда',
    product: 'amo messenger',
    context: 'Большой проект на JavaScript с медленной сборкой на Create React App и сломанным линтером.',
    done: [
      'Инициировал и провёл миграцию проекта с JavaScript на TypeScript',
      'Перевёл сборку с Create React App на Rsbuild',
      'Восстановил работу линтера, ввёл code-style правила и сделал прогон тестов обязательным в pipeline отгрузки',
      'Покрываю интерфейс скриншотными тестами',
    ],
    result: 'Сборка ускорилась с 10–20 до 3–5 секунд, код типизирован, а непрошедшие тесты не попадают в прод.',
    tags: ['TypeScript', 'Rsbuild', 'Jest', 'CI/CD'],
  },
];

export const earlier = [
  {
    company: 'Фестиваль анимации «Бессонница»',
    role: 'Frontend-разработчик',
    period: '02.2022 — 07.2022',
    text: 'Доска объявлений с категориями, главная и статьи на Markdown, авторизация, интерактивная карта площадки. PWA с полным кэшированием серверных данных — на площадке фестиваля не было устойчивой связи.',
    tags: ['React', 'TypeScript', 'Chakra UI', 'PWA'],
  },
  {
    company: 'Чистодар',
    role: 'Fullstack-разработчик',
    period: '07.2022 — 08.2022',
    text: 'Интернет-магазин на WordPress и WooCommerce: свой плагин быстрого заказа из корзины, эквайринг Альфа-Банка, выгрузка каталога из 1С.',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
  },
];

export interface Project {
  id: string;
  title: string;
  summary: string;
  points: string[];
  stack: string[];
  links: Link[];
  media?:
    | { type: 'video'; sources: { src: string; type: string }[]; poster: string; alt: string }
    | { type: 'image'; src: string; alt: string };
  badge?: string;
}

export const projects: Project[] = [
  {
    id: 'amo-stickers',
    title: 'amo stickers',
    summary: 'Стикеры и GIF для мессенджера amo в браузере: кнопка рядом с эмодзи, отправка одним кликом.',
    badge: '80+ пользователей в Chrome Web Store',
    points: [
      'Одно ядро на TypeScript собирается в расширение Chrome (MV3) и userscript',
      'Импорт паков из Telegram по ссылке, свои стикеры из картинок, видео и анимированных .tgs',
      'Поиск GIF через KLIPY и GIPHY',
      'Сайт с документацией на русском и английском',
    ],
    stack: ['TypeScript', 'Preact', 'Tailwind', 'esbuild', 'Vitest'],
    links: [
      { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/amo-stickers/abjnjphijggkkdbbmkldhibgepgdcgip' },
      { label: 'Документация', href: 'https://mcar2107.github.io/amo_msg_stickers/' },
      { label: 'GitHub', href: 'https://github.com/mcar2107/amo_msg_stickers' },
    ],
    media: {
      type: 'video',
      sources: [
        { src: 'projects/stickers.webm', type: 'video/webm' },
        { src: 'projects/stickers.mp4', type: 'video/mp4' },
      ],
      poster: 'projects/stickers-poster.webp',
      alt: 'Панель стикеров в amo: наведение на кнопку открывает её, стикер уходит без пузыря, удержание открывает предпросмотр, GIF находится поиском и уходит кликом',
    },
  },
  {
    id: 'autograph',
    title: 'Autograph',
    summary: 'Превращает набранный текст в фотографии исписанных от руки страниц. Работает целиком в браузере, без сервера.',
    points: [
      'Сам находит разлиновку на фото тетради: шаг линий, поля, наклон, изгиб бумаги и перспективу',
      'Неровный почерк: у каждой буквы свой контур, но связное письмо не рвётся',
      'Рендер на canvas, экспорт страниц в JPEG или пачкой в ZIP',
      'Юнит-, компонентные и скриншотные тесты в Docker, Storybook, FSD',
    ],
    stack: ['React', 'TypeScript', 'Zustand', 'Radix UI', 'Canvas', 'Playwright'],
    links: [
      { label: 'Открыть демо', href: 'https://mcar2107.github.io/autograph/' },
      { label: 'GitHub', href: 'https://github.com/mcar2107/autograph' },
    ],
    media: { type: 'image', src: 'projects/autograph.webp', alt: 'Интерфейс Autograph: слева текст, в центре страница в клетку, исписанная от руки, справа выбор бумаги, почерка и чернил' },
  },
  {
    id: 'lecture-transcript',
    title: 'lecture-transcript',
    summary: 'Локальный пайплайн: запись лекции в mp4 превращается в конспект-транскрипт со слайдами, формулами в LaTeX и таймкодами.',
    badge: 'MVP',
    points: [
      'Детект слайдов по дисперсии пикселей, дедупликация кадров по perceptual hash',
      'OCR слайдов и формул, распознавание речи с пунктуацией, термины со слайдов подсказывают ASR',
      '93-минутная лекция обрабатывается за ~11 минут на RTX 4060, всё офлайн',
      '587 быстрых тестов и 24 на эталонной записи',
    ],
    stack: ['Python', 'ffmpeg', 'OpenCV', 'PaddleOCR', 'GigaAM'],
    links: [{ label: 'GitHub', href: 'https://github.com/mcar2107/lecture-transcript' }],
  },
];

export const smallProjects: Project[] = [
  {
    id: 'sheet-money-helper',
    title: 'sheet_money_helper',
    summary: 'Telegram-бот для учёта расходов: траты по категориям записываются в Google-таблицу.',
    points: [],
    stack: ['TypeScript', 'Telegraf', 'Google Sheets API'],
    links: [
      { label: 'Бот', href: 'https://t.me/sheetsMoneyHelperBot' },
      { label: 'GitHub', href: 'https://github.com/mcar2107/sheet_money_helper' },
    ],
  },
  {
    id: 'video-chat',
    title: 'video-chat',
    summary: 'Видеочат в браузере на WebRTC с сигнальным сервером на Socket.IO и Express.',
    points: [],
    stack: ['React', 'TypeScript', 'WebRTC', 'Socket.IO'],
    links: [{ label: 'GitHub', href: 'https://github.com/mcar2107/video-chat' }],
  },
  {
    id: 'sea-battle',
    title: 'Морской бой',
    summary: 'Игра «Морской бой» на Next.js, устанавливается как PWA.',
    points: [],
    stack: ['Next.js', 'Zustand', 'Serwist', 'Jest'],
    links: [
      { label: 'Играть', href: 'https://sea-battle-five.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/mcar2107/sea-battle' },
    ],
  },
];

export const skills = [
  { group: 'Языки', items: ['TypeScript', 'JavaScript'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Redux Toolkit', 'Redux Saga', 'Zustand', 'Vue 2'] },
  { group: 'Стили', items: ['Tailwind', 'Sass', 'Дизайн-токены', 'Темизация', 'Адаптив', 'a11y'] },
  { group: 'Сборка и тесты', items: ['Rsbuild', 'Rspack', 'Webpack', 'Jest', 'Storybook', 'Скриншотные тесты'] },
  { group: 'DevOps', items: ['Docker', 'GitLab CI', 'nginx'] },
  { group: 'Backend и desktop', items: ['Node.js', 'Express', 'Nest.js', 'TypeORM', 'Electron'] },
  { group: 'AI', items: ['MCP', 'AG-UI', 'SSE', 'Claude Code', 'Скиллы и субагенты'] },
  { group: 'Прочее', items: ['Figma', 'FSD', 'WebSocket', 'gRPC', 'PWA', 'Яндекс Метрика'] },
];
