/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    localeDetection: true,
    defaultLocale: 'pt-BR',
    locales: ['pt', 'en', 'es', 'fr'],
  },
  debug: process.env.NODE_ENV === 'development',
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
}