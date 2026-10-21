import Typograf from 'typograf';

const tp = new Typograf({ locale: ['ru', 'en-US'], htmlEntity: { type: 'name', onlyInvisible: true } });

/** Типографирует строку: неразрывные пробелы, кавычки, тире. Результат вставлять через set:html. */
export const t = (text: string) => tp.execute(text);
