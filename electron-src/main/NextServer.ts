import { app } from 'electron'
import { createServer } from 'http'
import next from 'next'
import path from 'path'
import logger from './application/logger/Winston'
import i18nConfig from './i18next.config'

export default class NextServer {
  static async start() {
    return new Promise(async (res) => {
      try {
        const nextApp = next({
          dev: !app.isPackaged,
          dir: path.join(app.getAppPath(), 'renderer'),
          conf: {
            i18n: i18nConfig.i18n,
          },
        })

        const requestHandler = nextApp.getRequestHandler()
        await nextApp.prepare()

        createServer((req, res) => {
          try {
            requestHandler(req, res)
          } catch (error) {
            logger.error(`next error: ${JSON.stringify(error)}`)
          }
        }).listen(3000, () => {
          logger.info('Player UI started')
          res(true)
        })
        return true
      } catch (error) {
        logger.error(
          `Não foi possível iniciar a interface do player ${JSON.stringify(
            error.message
          )}`
        )
        res(false)
      }
    })
  }
}
