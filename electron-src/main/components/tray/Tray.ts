import { BrowserWindow, Tray, app, nativeImage } from 'electron'
import TrayWindow from 'electron-tray-window'
import path from 'path'

export default (window: BrowserWindow) => {
  console.log(path.join(app.getAppPath(), 'preload', 'preload.js'))

  const trayWindow = new BrowserWindow({
    width: 300,
    height: 400,
    show: false, // Hide the window until it's positioned correctly
    frame: false, // No frame to make it look like a context menu
    resizable: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload', 'preload.js'),
      devTools: false,
      sandbox: false,
      nodeIntegration: true,
      contextIsolation: true,
    },
  })

  const tray = new Tray(
    nativeImage.createFromPath(`${app.getAppPath()}/assets/tray.ico`)
  )
  tray.setTitle('Next Player')
  tray.setToolTip('Next Player')

  tray.addListener('double-click', () => {
    if (window.isMinimized()) {
      window.show()
    } else {
      window.show()
      window.focus()
    }
  })
  tray.addListener('right-click', () => {
    if (window.isMinimized()) {
      window.show()
    } else {
      window.show()
      window.focus()
    }
  })

  trayWindow.loadURL('http://localhost:3000/tray')


  TrayWindow.setOptions({
    tray: tray,
    window: trayWindow,
  })

  tray.on('right-click', () => {
    if (trayWindow.isVisible()) {
      trayWindow.hide()
    } else {
      TrayWindow.show(tray, trayWindow)
    }
  })

  trayWindow.on('blur', () => {
    trayWindow.hide()
  })

  return { tray, trayWindow }
}
