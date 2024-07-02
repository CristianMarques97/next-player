import { BrowserWindow, globalShortcut, shell } from 'electron'

export default class AppShortcut {
  static init() {
    if (process.env.PROD === 'true') {
      globalShortcut.unregisterAll()
    }

    // globalShortcut.register('CommandOrControl+Shift+L', () => {
    //   shell.openPath(process.env.LOG_DUMP)
    // })

    // globalShortcut.register('CommandOrControl+Shift+J', async () => {
    //   const login = LoginService.getLogin()
    //   if (login.auth) {
    //     BrowserWindow.getFocusedWindow().webContents.send('control:open')
    //   }
    // })

    // globalShortcut.register('CommandOrControl+Shift+Q', async () => {
    //   const login = LoginService.getLogin()
    //   if (login.auth) {
    //     BrowserWindow.getFocusedWindow().webContents.send('control:logout')
    //   }
    // })
  }
}
