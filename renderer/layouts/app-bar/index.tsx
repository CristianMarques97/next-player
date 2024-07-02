import {
  CloseRounded,
  MaximizeRounded,
  MinimizeRounded,
  WebAssetRounded,
} from '@mui/icons-material'
import { Box, Button, IconButton, Stack, css } from '@mui/material'
import Image from 'next/image'
import { AppBarStyles } from './styles'
import styled from '@emotion/styled'
import { useEffect, useMemo, useState } from 'react'
// import logo from '@assets/logo_2id.svg'

const StyledImage = styled.img`
  --webkit-app-region: 'no-drag';
`

type windowButtonsProps = {
  name: string
  icon: any
  onClick: () => void
}

const AppFrame = () => {
  const [buttons, setButtons] = useState<windowButtonsProps[]>([])
  useEffect(() => {
    setButtons([
      {
        name: 'minimize',
        icon: <MinimizeRounded />,
        onClick: () => window.electron.minimize(),
      },
      {
        name: 'maximize',
        icon:<WebAssetRounded />,
        onClick: () => window.electron.maximize(),
      },
      {
        name: 'close',
        icon: <CloseRounded />,
        onClick: () => window.electron.close(),
      },
    ])
  }, [])

  return (
    <Box sx={AppBarStyles.root}>
      <Box sx={AppBarStyles.image}>
        <StyledImage src={'../../static/logo.png'} height={35} width={80} />
      </Box>
      <Box sx={AppBarStyles.buttons}>
        <Stack sx={{ WebkitAppRegion: 'no-drag' }} direction="row">
          <Box>
            {buttons.map((b) => (
              <IconButton key={`navButton${b.name}`} aria-label={`app-bar${b.name}`} onClick={b.onClick}>{b.icon}</IconButton>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default AppFrame
