import { createTheme } from '@mui/material'

export const defaultTheme = createTheme({
    
  palette: {
    mode: 'dark',
    primary: {
      main: '#175C9C',
      light: '#3DBEE7',
      dark: '#103056',
    },
    secondary: {
      main: '#FA8E79',
      light: '#F9DA98',
      dark: '#FCF1CE',
    },
    text: {
      primary: '#E8F6F9',
      secondary: '#22BCE9',
    },
    grey: {
      A100: '#ababab',
    },
    background: {
      default: '#1F1F1F',
      paper: '#1E1F23',
    },
    warning: {
      main: '#ffc400',
    },
    success: {
      main: '#4CAF50',
    },
    error: {
      main: '#FF5733',
    },
  },
})



// {"Berkeley Blue":"103056","Aero":"3DBEE7","Lapis Lazuli":"175C9C","Oxford Blue":"0F234B","Salmon":"FA8E79","Yale Blue":"0F3667"}