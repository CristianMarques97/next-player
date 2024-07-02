import { SxProps, Theme } from '@mui/material'
import { MessageIpcHandler } from '../electron-src/preload/messages'
import { EventIpcHandler } from '@preload/event'
declare global {
  interface Window {
    messageAPI: MessageIpcHandler
    electron: EventIpcHandler
  }

  type CustomStyle = Record<string, SxProps<Theme> | undefined>
}
