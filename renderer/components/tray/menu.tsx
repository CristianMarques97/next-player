import {
  ExitToAppRounded,
  LaunchRounded,
  SystemUpdateRounded
} from '@mui/icons-material'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useEffect, useState } from 'react'
import ArrayUtils from '../../utils/Array'
import ConditionalRender from '../containers/conditional-render'

type Menu = {
  text?: string
  icon?: any
  action?: () => void
  isDivider?: boolean
  hide?: boolean
}

type Split = Menu[]

const TrayMenu = () => {
  const [itens, setItens] = useState<Split[]>([])

  const handleQuit = () => {}

  useEffect(() => {
    const menuItens: Menu[] = [
      {
        text: 'Mostrar janela',
        icon: <LaunchRounded />,
        action: () => window.electron.show(),
      },
      {
        text: 'Buscar Atualizações',
        icon: <SystemUpdateRounded />,
        action: () => {},
      },
      {
        isDivider: true,
      },
      {
        text: 'Sair',
        icon: <ExitToAppRounded />,
        action: () => {
          window.electron.quit()
        },
      },
    ]
    setItens(ArrayUtils.SplitTrayMenu(menuItens))
  }, [])

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background' }}>
      {itens.map((section, index) => (
        <>
          <nav>
            <List>
              {section.map((item) => (
                <ConditionalRender show={!item.hide}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={item.action}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                </ConditionalRender>
              ))}
            </List>
          </nav>
          {index < itens.length - 1 && <Divider />}
        </>
      ))}
    </Box>
  )
}

export default TrayMenu
