import * as ru from './data/content';
import * as en from './data/content.en';

export const langs = ['ru', 'en'] as const;
export type Lang = (typeof langs)[number];

/** Язык корня сайта; остальные живут в /<lang>/ */
export const defaultLang: Lang = 'ru';

/** Язык, если ни один из языков браузера не поддерживается */
export const fallbackLang: Lang = 'en';

export const content: Record<Lang, typeof ru> = { ru, en };

export const langUrl = (lang: Lang) => {
  const base = import.meta.env.BASE_URL;
  return lang === defaultLang ? base : `${base}${lang}/`;
};

const ruUi = {
  langName: 'Русский',
  ogLocale: 'ru_RU',
  title: 'Макар Короленко — Frontend-разработчик',
  description:
    'Портфолио фронтенд-разработчика: 4 года в amoCRM — amo мессенджер на React и Electron, сервис промо-лендингов на Astro, AI-ассистент amoCRM. TypeScript, React, Next.js, Astro.',
  skip: 'Перейти к содержимому',
  toTop: 'Наверх',
  sections: 'Разделы',
  toggleTheme: 'Сменить тему',
  nav: { experience: 'Опыт', projects: 'Проекты', skills: 'Стек', contacts: 'Контакты' },
  writeTelegram: 'Написать в Telegram',
  products: 'Продукты:',
  result: 'Результат',
  bugs: 'Разборы багов',
  symptom: 'Симптом',
  cause: 'Причина',
  fix: 'Что сделал',
  earlier: 'До amoCRM',
  projectsTitle: 'Свои проекты',
  projectsLead: 'Делаю инструменты, которые решают мои собственные задачи, и довожу их до пользователей. Код открыт.',
  more: 'Ещё',
  restBefore: 'Остальное, включая учебные проекты 2021–2022 годов, —',
  restLink: 'на GitHub',
  skillsTitle: 'С чем работаю',
  contactsTitle: 'Открыт к предложениям — напишите',
  source: 'Исходники сайта · Astro',
};

export const ui: Record<Lang, typeof ruUi> = {
  ru: ruUi,
  en: {
    langName: 'English',
    ogLocale: 'en_US',
    title: 'Makar Korolenko — Frontend Developer',
    description:
      'Frontend developer portfolio: 4 years at amoCRM — the amo messenger on React and Electron, a promo landing page service on Astro, the amoCRM AI assistant. TypeScript, React, Next.js, Astro.',
    skip: 'Skip to content',
    toTop: 'Back to top',
    sections: 'Sections',
    toggleTheme: 'Toggle theme',
    nav: { experience: 'Experience', projects: 'Projects', skills: 'Stack', contacts: 'Contacts' },
    writeTelegram: 'Message on Telegram',
    products: 'Products:',
    result: 'Result',
    bugs: 'Bug write-ups',
    symptom: 'Symptom',
    cause: 'Cause',
    fix: 'What I did',
    earlier: 'Before amoCRM',
    projectsTitle: 'Side projects',
    projectsLead: 'I build tools that solve my own problems and ship them to real users. The code is open.',
    more: 'More',
    restBefore: 'Everything else, including study projects from 2021–2022, is',
    restLink: 'on GitHub',
    skillsTitle: 'What I work with',
    contactsTitle: 'Open to offers — get in touch',
    source: 'Site source · Astro',
  },
};
