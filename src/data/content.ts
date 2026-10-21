export interface Link {
  label: string;
  href: string;
}

export const profile = {
  name: 'Макар Короленко',
  role: 'Frontend-разработчик',
  location: 'Москва · офис, гибрид, удалённо',
  lead: 'Четыре года во фронтенде amoCRM: мессенджер amo (web и Electron), сервис промо-лендингов на Astro, AI-ассистент. Сам веду задачи от ТЗ до прода.',
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
    'amo messenger — корпоративный мессенджер в вебе и на десктопе, десятки тысяч пользователей. С 2026 года ещё промо-сайты и AI-ассистент amoCRM.',
  links: [
    { label: 'amo.tm', href: 'https://amo.tm' },
    { label: 'amocrm.ru', href: 'https://www.amocrm.ru' },
  ] satisfies Link[],
};

export const cases: Case[] = [
  {
    id: 'promo-landings',
    title: 'Сервис промо-лендингов с нуля',
    product: 'Промо amoCRM · 2026',
    context: 'Старое промо было тяжёлым, а любую правку текста выкладывал разработчик.',
    done: [
      'Предложил вынести лендинги в отдельный сервис на Astro, предложение приняли',
      'Поднял сервис с нуля: GitLab CI, nginx, UI-kit в Storybook',
      'Сделал генерацию лендингов из Markdown с проверкой контента в CI',
      'По Вебвизору нашёл, где лендинг теряет посетителей, и сделал окно регистрации с первого экрана',
      'Настроил вёрстку лендингов AI-агентом по макетам Figma',
    ],
    result: 'Контент-команда публикует лендинги сама, без разработчика.',
    tags: ['Astro', 'GitLab CI', 'nginx', 'Storybook', 'Figma MCP'],
    links: [{ label: 'Пример лендинга', href: 'https://pl.amocrm.ru/niche/realty/' }],
  },
  {
    id: 'ai-assistant',
    title: 'AI-ассистент amoCRM',
    product: 'amoCRM · 2026',
    context: 'Ассистент отвечает в чате и сам выполняет действия в CRM через MCP.',
    done: [
      'Участвовал в разработке чата: стриминг по SSE, протокол AG-UI',
      'Сделал onboarding-тур: ассистент помогает новому клиенту настроить аккаунт в диалоге',
      'Собрал виджет AI-агента для сайтов',
    ],
    result: 'Ассистент и тур работают в проде.',
    tags: ['MCP', 'AG-UI', 'SSE', 'React', 'Preact'],
    links: [{ label: 'amocrm.ru', href: 'https://www.amocrm.ru' }],
  },
  {
    id: 'calls',
    title: 'Звонки и конференции',
    product: 'amo messenger · 2025',
    context: 'В мессенджере не было звонков.',
    done: [
      'Сам сделал декомпозицию и ТЗ',
      'Звонки, конференции и демонстрация экрана на Jitsi в вебе и на десктопе',
      'Спроектировал препроцессинг видео с учётом лицензий на кодеки',
    ],
    result: 'Звонки в проде с 2025 года.',
    tags: ['Jitsi', 'Electron', 'WebSocket', 'React'],
    links: [{ label: 'amo.tm', href: 'https://amo.tm' }],
  },
  {
    id: 'messenger',
    title: 'Права, закрепы и тёмная тема',
    product: 'amo messenger',
    context: 'Функции мессенджера, которые я делал сам или с коллегой.',
    done: [
      'Права доступа к каналам',
      'Закреплённые сообщения и реакции',
      'Вместе с коллегой — тёмная тема на дизайн-токенах и Tailwind',
    ],
    result: 'Новые экраны собираются на токенах и общих компонентах.',
    tags: ['React', 'Redux', 'Tailwind', 'Дизайн-токены'],
  },
  {
    id: 'infra',
    title: 'Сборка, линтер и CI',
    product: 'amo messenger',
    context: 'Сборка была медленной, линтер не работал, тесты не были обязательными.',
    done: [
      'Вместе с коллегой перевёл сборку с Create React App на Rsbuild',
      'Восстановил линтер и сделал тесты обязательными в CI',
      'Начал миграцию на TypeScript',
    ],
    result: 'Сборка ускорилась с 10–20 до 3–5 секунд.',
    tags: ['Rsbuild', 'TypeScript', 'Jest', 'GitLab CI'],
  },
  {
    id: 'team',
    title: 'Команда',
    product: 'amoCRM',
    context: 'Прежняя фронтенд-команда ушла.',
    done: [
      'Нанял четырёх разработчиков',
      'Вёл их как техлид: задачи, онбординг, ревью',
      'Ревьюю и проверяю задачи коллег перед выкладкой',
    ],
    result: 'Двое из нанятых работают со мной до сих пор.',
    tags: ['Найм', 'Code review', 'Онбординг'],
  },
];

export interface Bug {
  id: string;
  title: string;
  product: string;
  symptom: string;
  cause: string;
  fix: string;
}

export const bugs: Bug[] = [
  {
    id: 'sleep-crash',
    title: 'Падение после сна',
    product: 'amo messenger · WebSocket',
    symptom: 'После выхода компьютера из сна клиент падал.',
    cause: 'Две гонки в WebSocket-транспорте при переподключении.',
    fix: 'Перенёс таймауты в транспорт, добавил реконнект с backoff. Клиенты подтвердили исправление.',
  },
  {
    id: 'memory-leak',
    title: 'Утечка памяти в десктопе',
    product: 'amo messenger · Electron',
    symptom: 'Десктоп со временем съедал всё больше памяти.',
    cause: 'Утечка в самом Chromium, в DevTools её не видно.',
    fix: 'Воспроизвёл, оценил цену обновления Electron и выпустил исправление для macOS и Linux.',
  },
  {
    id: 'bot-loading',
    title: 'Бот, который «вечно грузился»',
    product: 'amo messenger · боты',
    symptom: 'У клиента бот не загружался, локально всё работало.',
    cause: 'Разобрал у клиента по AnyDesk: данные бота портились при перекодировании.',
    fix: 'Перевёл передачу данных бота на бинарный формат.',
  },
  {
    id: 'kaspersky-csp',
    title: 'Виджет без стилей',
    product: 'AI-агент · виджет для сайтов',
    symptom: 'У части посетителей виджет открывался без стилей.',
    cause: 'Kaspersky подменяет CSP, и инлайн-стили перестают работать.',
    fix: 'Вынес стили в отдельный файл.',
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
  { group: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Preact', 'Redux Toolkit', 'Redux Saga', 'Zustand', 'Vue 2'] },
  { group: 'Вёрстка', items: ['CSS', 'Sass', 'Tailwind', 'Дизайн-токены', 'Темизация', 'Адаптивная вёрстка', 'a11y'] },
  { group: 'Сборка и CI', items: ['Rsbuild', 'Vite', 'Webpack', 'SWC', 'Docker', 'GitLab CI', 'nginx'] },
  { group: 'Тестирование', items: ['Jest', 'Storybook', 'Скриншотные тесты', 'Lighthouse CI'] },
  { group: 'Desktop и backend', items: ['Electron', 'Node.js', 'Express', 'Nest.js', 'TypeORM'] },
  { group: 'Протоколы', items: ['WebSocket', 'gRPC', 'SSE'] },
  { group: 'AI', items: ['Claude Code', 'MCP', 'Figma MCP', 'AG-UI', 'Свои скиллы для агентов'] },
  { group: 'Аналитика', items: ['Яндекс Метрика', 'Вебвизор', 'Web Vitals'] },
  { group: 'Прочее', items: ['Figma', 'FSD', 'PWA'] },
];
