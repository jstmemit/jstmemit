import { locale } from './locale.js';

const interpolateString = (string: string, variables: Record<string, any>) => string.replace(/\{\{(\w+)\}\}/g, (match, key) => (Object.prototype.hasOwnProperty.call(variables, key) ? variables[key] : match));

export const t = (key: string, language: string, variables = {}) => {
  const targetLanguage = locale[language] ? language : 'english';

  let translation = locale[targetLanguage]?.[key];

  if (!translation && targetLanguage !== 'english') {
    translation = locale?.english?.[key];
  }

  if (!translation) {
    return key;
  }

  if (Object.keys(variables).length > 0) {
    return interpolateString(translation, variables);
  }

  return translation;
};

export const getLanguageTranslations = (language: string) => locale[language] || locale.english;
