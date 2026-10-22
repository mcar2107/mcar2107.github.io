import type { Case, Bug, Project, Link } from './content';

export const profile = {
  name: 'Makar Korolenko',
  role: 'Frontend Developer',
  location: 'Moscow · hybrid, remote',
  lead: 'Four years on the amoCRM frontend: the amo messenger (web and Electron), a promo landing page service on Astro, an AI assistant. I take tasks from spec to production on my own.',
  contacts: {
    telegram: { label: '@mcar_2107', href: 'https://t.me/mcar_2107' },
    email: { label: 'makar.korolenko2005@mail.ru', href: 'mailto:makar.korolenko2005@mail.ru' },
    github: { label: 'github.com/mcar2107', href: 'https://github.com/mcar2107' },
  },
};

export const job = {
  company: 'amoCRM',
  role: 'Frontend Developer',
  period: '10.2022 — present',
  about:
    'amo messenger is a corporate messenger for web and desktop with tens of thousands of users. Since 2026 I also work on amoCRM promo sites and the AI assistant.',
  links: [
    { label: 'amo.tm', href: 'https://amo.tm' },
    { label: 'amocrm.ru', href: 'https://www.amocrm.ru' },
  ] satisfies Link[],
};

export const cases: Case[] = [
  {
    id: 'promo-landings',
    title: 'A promo landing page service from scratch',
    product: 'amoCRM promo · 2026',
    context: 'The old promo site was heavy, and every text change had to be shipped by a developer.',
    done: [
      'Proposed moving landing pages into a separate Astro service, and the proposal was accepted',
      'Built the service from scratch: GitLab CI, nginx, a UI kit in Storybook',
      'Set up landing page generation from Markdown with content checks in CI',
      'Used Webvisor session replays to find where the landing page was losing visitors and added a sign-up form to the first screen',
      'Set up an AI agent that builds landing pages from Figma mockups',
    ],
    result: 'The content team publishes landing pages on its own, without a developer.',
    tags: ['Astro', 'GitLab CI', 'nginx', 'Storybook', 'Figma MCP'],
    links: [{ label: 'Sample landing page', href: 'https://pl.amocrm.ru/niche/realty/' }],
  },
  {
    id: 'ai-assistant',
    title: 'amoCRM AI assistant',
    product: 'amoCRM · 2026',
    context: 'The assistant answers in chat and performs actions in the CRM by itself via MCP.',
    done: [
      'Worked on the chat: SSE streaming, the AG-UI protocol',
      'Built an onboarding tour in which the assistant helps a new customer set up their account through a dialogue',
      'Built an AI agent widget for websites',
    ],
    result: 'The assistant and the tour are in production.',
    tags: ['MCP', 'AG-UI', 'SSE', 'React', 'Preact'],
    links: [{ label: 'amocrm.ru', href: 'https://www.amocrm.ru' }],
  },
  {
    id: 'calls',
    title: 'Calls and conferences',
    product: 'amo messenger · 2025',
    context: 'The messenger had no calls.',
    done: [
      'Broke the feature down and wrote the spec myself',
      'Calls, conferences and screen sharing on Jitsi, on web and desktop',
      'Designed video preprocessing with codec licensing in mind',
    ],
    result: 'Calls have been in production since 2025.',
    tags: ['Jitsi', 'Electron', 'WebSocket', 'React'],
    links: [
      {
        label: 'amo.tm',
        href: 'https://amo.tm/#:~:text=%D0%97%D0%B2%D0%BE%D0%BD%D0%BA%D0%B8%20%D0%B8%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86%D0%B8%D0%B8',
      },
    ],
  },
  {
    id: 'messenger',
    title: 'Permissions, pins and a dark theme',
    product: 'amo messenger',
    context: 'Messenger features I built on my own or together with a colleague.',
    done: [
      'Channel access permissions',
      'Pinned messages and reactions',
      'With a colleague: a dark theme built on design tokens and Tailwind',
    ],
    result: 'New screens are built from tokens and shared components.',
    tags: ['React', 'Redux', 'Tailwind', 'Design tokens'],
  },
  {
    id: 'infra',
    title: 'Build, linter and CI',
    product: 'amo messenger',
    context: 'The build was slow, the linter was broken, and tests were optional.',
    done: [
      'Together with a colleague, moved the build from Create React App to Rsbuild',
      'Brought the linter back and made tests required in CI',
      'Started the migration to TypeScript',
    ],
    result: 'Build time went down from 10–20 to 3–5 seconds.',
    tags: ['Rsbuild', 'TypeScript', 'Jest', 'GitLab CI'],
  },
  {
    id: 'team',
    title: 'Team',
    product: 'amoCRM',
    context: 'The previous frontend team had left.',
    done: [
      'Hired four developers',
      'Led them as a tech lead: tasks, onboarding, code review',
      'Review and test my colleagues’ work before release',
    ],
    result: 'Two of the developers I hired still work with me.',
    tags: ['Hiring', 'Code review', 'Onboarding'],
  },
];

export const bugs: Bug[] = [
  {
    id: 'sleep-crash',
    title: 'Crash after sleep',
    product: 'amo messenger · WebSocket',
    symptom: 'The client crashed after the computer woke up from sleep.',
    cause: 'Two race conditions in the WebSocket transport during reconnection.',
    fix: 'Moved the timeouts into the transport and added reconnection with backoff. Customers confirmed the fix.',
  },
  {
    id: 'memory-leak',
    title: 'Memory leak in the desktop app',
    product: 'amo messenger · Electron',
    symptom: 'The desktop app ate more and more memory over time.',
    cause: 'A leak in Chromium itself, invisible in DevTools.',
    fix: 'Reproduced it, estimated the cost of upgrading Electron and shipped a fix for macOS and Linux.',
  },
  {
    id: 'bot-loading',
    title: 'The bot that was “always loading”',
    product: 'amo messenger · bots',
    symptom: 'A customer’s bot never finished loading, while everything worked locally.',
    cause: 'Debugged it on the customer’s machine over AnyDesk: the bot data got corrupted during re-encoding.',
    fix: 'Switched bot data transfer to a binary format.',
  },
  {
    id: 'kaspersky-csp',
    title: 'A widget without styles',
    product: 'AI agent · website widget',
    symptom: 'For some visitors the widget opened without any styles.',
    cause: 'Kaspersky rewrites the CSP, which breaks inline styles.',
    fix: 'Moved the styles into a separate file.',
  },
];

export const earlier = [
  {
    company: 'Bessonnitsa animation festival',
    role: 'Frontend Developer',
    period: '02.2022 — 07.2022',
    text: 'A classifieds board with categories, a home page and articles in Markdown, authentication, an interactive map of the venue. A PWA that fully caches server data, since the festival venue had no reliable connection.',
    tags: ['React', 'TypeScript', 'Chakra UI', 'PWA'],
  },
  {
    company: 'Chistodar',
    role: 'Fullstack Developer',
    period: '07.2022 — 08.2022',
    text: 'An online store on WordPress and WooCommerce: a custom plugin for quick checkout from the cart, Alfa-Bank payment acquiring, catalog import from 1C.',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
  },
];

export const projects: Project[] = [
  {
    id: 'amo-stickers',
    title: 'amo stickers',
    summary: 'Stickers and GIFs for the amo messenger in the browser: a button next to the emoji picker, sending in one click.',
    badge: '80+ users on the Chrome Web Store',
    points: [
      'A single TypeScript core builds into a Chrome extension (MV3) and a userscript',
      'Import of Telegram sticker packs by link, custom stickers from images, videos and animated .tgs',
      'GIF search via KLIPY and GIPHY',
      'A documentation site in Russian and English',
    ],
    stack: ['TypeScript', 'Preact', 'Tailwind', 'esbuild', 'Vitest'],
    links: [
      { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/amo-stickers/abjnjphijggkkdbbmkldhibgepgdcgip' },
      { label: 'Docs', href: 'https://mcar2107.github.io/amo_msg_stickers/en/' },
      { label: 'GitHub', href: 'https://github.com/mcar2107/amo_msg_stickers' },
    ],
    media: {
      type: 'video',
      sources: [
        { src: 'projects/stickers.webm', type: 'video/webm' },
        { src: 'projects/stickers.mp4', type: 'video/mp4' },
      ],
      poster: 'projects/stickers-poster.webp',
      alt: 'The sticker panel in amo: hovering the button opens it, a sticker is sent without a bubble, holding one opens a preview, a GIF is found by search and sent with a click',
    },
  },
  {
    id: 'autograph',
    title: 'Autograph',
    summary: 'Turns typed text into photos of handwritten pages. Runs entirely in the browser, with no server.',
    points: [
      'Detects the ruling on a photo of a notebook page by itself: line spacing, margins, tilt, paper curl and perspective',
      'Uneven handwriting: every letter gets its own outline, yet joined-up writing stays connected',
      'Rendering on canvas, export of pages to JPEG or in bulk to ZIP',
      'Unit, component and screenshot tests in Docker, Storybook, FSD',
    ],
    stack: ['React', 'TypeScript', 'Zustand', 'Radix UI', 'Canvas', 'Playwright'],
    links: [
      { label: 'Open the demo', href: 'https://mcar2107.github.io/autograph/' },
      { label: 'GitHub', href: 'https://github.com/mcar2107/autograph' },
    ],
    media: {
      type: 'image',
      src: 'projects/autograph.webp',
      alt: 'The Autograph interface: text on the left, a squared page written by hand in the center, paper, handwriting and ink options on the right',
    },
  },
  {
    id: 'lecture-transcript',
    title: 'lecture-transcript',
    summary: 'A local pipeline that turns an mp4 lecture recording into a transcript with slides, LaTeX formulas and timestamps.',
    badge: 'MVP',
    points: [
      'Slide detection by pixel variance, frame deduplication by perceptual hash',
      'OCR of slides and formulas, speech recognition with punctuation, with terms from the slides used as hints for ASR',
      'A 93-minute lecture is processed in ~11 minutes on an RTX 4060, fully offline',
      '587 fast tests and 24 on a reference recording',
    ],
    stack: ['Python', 'ffmpeg', 'OpenCV', 'PaddleOCR', 'GigaAM'],
    links: [{ label: 'GitHub', href: 'https://github.com/mcar2107/lecture-transcript' }],
  },
];

export const smallProjects: Project[] = [
  {
    id: 'sheet-money-helper',
    title: 'sheet_money_helper',
    summary: 'A Telegram bot for expense tracking: spending by category goes into a Google Sheet.',
    points: [],
    stack: ['TypeScript', 'Telegraf', 'Google Sheets API'],
    links: [
      { label: 'Bot', href: 'https://t.me/sheetsMoneyHelperBot' },
      { label: 'GitHub', href: 'https://github.com/mcar2107/sheet_money_helper' },
    ],
  },
  {
    id: 'video-chat',
    title: 'video-chat',
    summary: 'A WebRTC video chat in the browser with a signaling server on Socket.IO and Express.',
    points: [],
    stack: ['React', 'TypeScript', 'WebRTC', 'Socket.IO'],
    links: [{ label: 'GitHub', href: 'https://github.com/mcar2107/video-chat' }],
  },
  {
    id: 'sea-battle',
    title: 'Battleship',
    summary: 'The Battleship game on Next.js, installable as a PWA.',
    points: [],
    stack: ['Next.js', 'Zustand', 'Serwist', 'Jest'],
    links: [
      { label: 'Play', href: 'https://sea-battle-five.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/mcar2107/sea-battle' },
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Preact', 'Redux Toolkit', 'Redux Saga', 'Zustand', 'Vue 2'] },
  { group: 'Layout', items: ['CSS', 'Sass', 'Tailwind', 'Design tokens', 'Theming', 'Responsive layout', 'a11y'] },
  { group: 'Build and CI', items: ['Rsbuild', 'Vite', 'Webpack', 'SWC', 'Docker', 'GitLab CI', 'nginx'] },
  { group: 'Testing', items: ['Jest', 'Storybook', 'Screenshot tests', 'Lighthouse CI'] },
  { group: 'Desktop and backend', items: ['Electron', 'Node.js', 'Express', 'Nest.js', 'TypeORM'] },
  { group: 'Protocols', items: ['WebSocket', 'gRPC', 'SSE'] },
  { group: 'AI', items: ['Claude Code', 'MCP', 'Figma MCP', 'AG-UI', 'Custom agent skills'] },
  { group: 'Analytics', items: ['Yandex Metrica', 'Webvisor', 'Web Vitals'] },
  { group: 'Other', items: ['Figma', 'FSD', 'PWA'] },
];
