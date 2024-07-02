import { CloseRounded, ErrorRounded } from '@mui/icons-material'
import { Box, IconButton, Slide, Snackbar } from '@mui/material'
type Props = {
  message: string
  type: 'sucess' | 'info' | 'error'
  onClose: () => void
}
const CustomSnack = ({ message, onClose, type }: Props) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    onClose()
  }
  return (
    <Snackbar
      ContentProps={{
        sx: {
          backgroundColor: 'background.paper',
          color: 'text.primary',
        },
      }}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      onClose={handleClose}
      open={!!message}
      message={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ErrorRounded color="error" />
          <Box sx={{ paddingLeft: 2 }}>
            {' '}
            <span>{message}</span>
          </Box>
        </Box>
      }
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="primary"
          onClick={handleClose}
        >
          <CloseRounded fontSize="small" />
        </IconButton>
      }
      autoHideDuration={3000}
      TransitionComponent={Slide}
    />
  )
}

export default CustomSnack
