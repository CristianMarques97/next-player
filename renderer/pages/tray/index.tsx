import { Box } from '@mui/material'
import TrayMenu from '../../components/tray/menu'

const TrayWindow = () => {
  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'background.paper',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: 1,
        }}
      >
        <img src={'../../static/logo.png'} height={35} width={100} />
      </Box>
      <TrayMenu />
    </Box>
  )
}

export default TrayWindow
