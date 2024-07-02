import { BrowserWindow, Tray, app } from 'electron'
import LogCleaner from './application/logger/ClearLogs'
import createTrayMenu from './components/tray/Tray'

import logger from './application/logger/Winston'
import AppWindow from './components/window'
import i18n from './constants/localization/i18next.config'
import path from 'path'

export default class App {
  static window: BrowserWindow
  static tray: Tray
  static trayMenu: BrowserWindow
  static logPath: string

  static async registerAutoLaunch() {
    // if (app.isPackaged) {
    //   let autoLaunch = new AutoLaunch({
    //     name: '2id Player',
    //     path: app.getPath('exe'),
    //   })
    //   const isEnabled = await autoLaunch.isEnabled()
    //   if (!isEnabled) {
    //     await autoLaunch.enable()
    //   }
    // }
  }

  static clearLogs() {
    LogCleaner()
  }

  static async app() {
    logger.info(`Iniciando player com a versão ${app.getVersion()}`)
    this.window = await AppWindow.createWindow()

    const { tray, trayWindow } = createTrayMenu(this.window)

    this.tray = tray
    this.trayMenu = trayWindow

    // force player single instance
    const gotTheLock = app.requestSingleInstanceLock()
    if (!gotTheLock) {
      app.quit()
    } else {
      app.on('second-instance', (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        if (this.window) {
          if (this.window.isMinimized()) {
            this.window.restore()
          }
          this.window.show()
          this.window.focus()
        }
      })
    }
  }
}
