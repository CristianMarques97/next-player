import { UserConfig } from 'next-i18next'

const i18nConfig: UserConfig = {
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt', 'pt-BR', 'en', 'es', 'fr'],
  },
  debug: process.env.NODE_ENV === 'development',
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
}

export default i18nConfig
