import { app } from 'electron'
import i18n from 'i18next'
import i18nextBackend from 'i18next-node-fs-backend'

i18n.use(i18nextBackend)

// initialize if not already initialized

if (!i18n.isInitialized) {
  i18n.init({
    lng: app.getLocale(),
    backend: {
      loadPath: `${app.getAppPath()}/public/locales/{{lng}}/{{ns}}.json`,
    },
    fallbackLng: 'pt-BR',
    cleanCode: true,
    // debug: !app.isPackaged,
  })
}

export default i18n
