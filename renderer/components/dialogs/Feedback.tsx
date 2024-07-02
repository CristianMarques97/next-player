import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { Trans } from 'next-i18next'

type Props = {
  title: string
  message: string
  negativeButton: string
  positiveButton: string
  onClick: (response: boolean) => void
}

export type DialogHandler = {
  openDialog: () => void
}

const FeedBackDialog = forwardRef((props: Props, ref) => {
  const [open, setOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    openDialog() {
      setOpen(true)
    },
  }))

  const handleBackdropClickClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false)
    }
  }

  const handleClose = (reason: boolean) => {
    props.onClick(reason)
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={handleBackdropClickClose}>
      <DialogTitle>
        <Trans>{props.title}</Trans>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: 'text.primary' }}>
          <Trans>{props.message}</Trans>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            fontWeight: 'bold',
          }}
          onClick={() => handleClose(false)}
          color="secondary"
        >
          <Trans>{props.negativeButton}</Trans>
        </Button>
        <Button
          sx={{
            fontWeight: 'bold',
          }}
          onClick={() => handleClose(true)}
          color="primary"
        >
          <Trans>{props.positiveButton}</Trans>
        </Button>
      </DialogActions>
    </Dialog>
  )
})

export default FeedBackDialog
