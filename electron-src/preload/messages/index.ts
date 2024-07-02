import { contextBridge, ipcRenderer } from 'electron'


const handler = {
  openUpdateDialog: (callback: any) => ipcRenderer.on('update:open', callback),
}

contextBridge.exposeInMainWorld('messageAPI', handler)

export type MessageIpcHandler = typeof handler
