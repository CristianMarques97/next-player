import styled from '@emotion/styled'
import { Box } from '@mui/material'

const Background = styled(Box)`
  background-image: url('../../static/login-background.png');
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Background />
      {children}
    </>
  )
}
