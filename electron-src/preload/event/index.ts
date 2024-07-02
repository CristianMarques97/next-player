import { contextBridge, ipcRenderer } from 'electron'
import { AppWindowEvents } from '../../main/constants/enums/WindowEvents'
import ElectronListeners from '../../main/constants/enums/ElectronListeners'
import RendererListeners from '../../main/constants/enums/RendererListeners'

const handler = {
  send: (channel: string, ...data: any[]) => {
    return ipcRenderer.invoke(channel, ...data)
  },
  receive: (channel: string, func: any) => {
    try {
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    } catch (error) {}
  },
  receiveOnce: (channel: string, func: any) => {
    ipcRenderer.once(channel, (event, ...args) => func(...args))
  },
  minimize: () => {
    ipcRenderer.invoke(AppWindowEvents.MINIMIZE)
  },
  maximize: () => {
    ipcRenderer.invoke(AppWindowEvents.MAXIMIZE)
  },
  close: () => {
    ipcRenderer.invoke(AppWindowEvents.CLOSE)
  },
  isMaximazed: () => {
    return ipcRenderer.invoke(AppWindowEvents.IS_MAXIMIZED)
  },

  show: () => {
    return ipcRenderer.invoke(AppWindowEvents.SHOW)
  },
  showLogoutModal: () => {
    ipcRenderer.invoke(
      ElectronListeners.DISPATCH_WINDOW_LISTNER,
      RendererListeners.SHOW_QUIT_MODAL
    )
  },
  quit: () => {
    ipcRenderer.invoke('quit')
  },
}

contextBridge.exposeInMainWorld('electron', handler)

export type EventIpcHandler = typeof handler
