import * as dotenv from 'dotenv'
import { app, ipcMain } from 'electron'
import * as path from 'path'
import App from './App'
import NextServer from './NextServer'
import AppShortcut from './components/shortcuts/Shortcut'
import './constants/localization/i18next.config'
dotenv.config({ path: path.resolve(__dirname, '../', '.env') })

const init = async () => {
  await app.whenReady()
  await NextServer.start()

  App.app()
  AppShortcut.init()

  ipcMain.handleOnce('quit', () => {
    app.quit()
  })
}

init()
