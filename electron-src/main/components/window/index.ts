import Environment from '../../constants/environment/Environment'
import { BrowserWindow, ipcMain, nativeTheme, app } from 'electron'
import path from 'path'
import { AppWindowEvents } from '../../constants/enums/WindowEvents'

export default class AppWindow {
  static isDev = Environment.env === 'dev'
  static window: BrowserWindow

  static async createWindow() {
    if (!app.isPackaged) {
      app.setPath('userData', `${app.getPath('userData')} (development)`)
    }

    this.window = new BrowserWindow({
      width: 1280,
      height: 768,
      minWidth: 1200,
      minHeight: 768,
      icon: `${app.getAppPath()}/assets/logo.ico`,
      show: true,
      frame: false,
      resizable: true,
      darkTheme: nativeTheme.shouldUseDarkColors,
      webPreferences: {
        sandbox: false,
        nodeIntegration: true,
        contextIsolation: true,
        devTools:
          Environment.env === 'dev' || Environment.env === 'staging',
        preload: path.join(app.getAppPath(), 'preload', 'preload.js'),
      },
    })

    // ativa a console do desenvolvedor
    if (this.isDev) {
      this.window.webContents.once('dom-ready', async () => {
        this.window.webContents.openDevTools()
      })
    }

    this.window.loadURL('http://localhost:3000')

    ipcMain.handle(AppWindowEvents.MINIMIZE, () => {
      this.window.minimize()
    })

    ipcMain.handle(AppWindowEvents.CLOSE, () => {
      this.window.hide()
    })

    ipcMain.handle(AppWindowEvents.IS_MAXIMIZED, () => {
      return this.window.isMaximized
    })

    ipcMain.handle(AppWindowEvents.MAXIMIZE, () => {
      if (this.window?.isMaximized()) {
        this.window.unmaximize()
      } else {
        this.window?.maximize()
      }
    })

    ipcMain.handle(AppWindowEvents.SHOW, () => {
      return this.window.show()
    })

    return this.window
  }

  static getWindow() {
    return this.window
  }
}
