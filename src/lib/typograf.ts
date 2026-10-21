import Typograf from 'typograf';
import type { Lang } from '../i18n';

const htmlEntity = { type: 'name', onlyInvisible: true } as const;

const tp: Record<Lang, Typograf> = {
  ru: new Typograf({ locale: ['ru', 'en-US'], htmlEntity }),
  en: new Typograf({ locale: ['en-US'], htmlEntity }),
};

/** Типографирует строку по правилам языка: неразрывные пробелы, кавычки, тире. Результат вставлять через set:html. */
export const t = (text: string, lang: Lang) => tp[lang].execute(text);
