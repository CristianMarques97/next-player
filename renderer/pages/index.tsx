import { AddRounded } from '@mui/icons-material'
import { Box, Button, Fab, Grid } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nConfig from '../i18next.config'

export async function getStaticProps({ locale = 'pt-BR' }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18nConfig)),
    },
  }
}

const IndexPage = () => {
  return (
    <Box>
      <Box sx={styles.root}>
        <Grid container spacing={2} justifyItems={'center'} alignItems={'center'} justifyContent={'center'}>
          <Grid item>
            <Button color="primary" variant="contained">
              Primary
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" variant="contained">
              Secondary
            </Button>
          </Grid>
          <Grid item>
            <Button color="success" variant="contained">
              success
            </Button>
          </Grid>
          <Grid item>
            <Button color="error" variant="contained">
              error
            </Button>
          </Grid>
          <Grid item>
            <Button color="warning" variant="contained">
              warning
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Fab sx={styles.fab} color="primary">
          <AddRounded />
        </Fab>
      </Box>
    </Box>
  )
}

const styles: CustomStyle = {
  root: {
    paddingTop:5
  },
  fab: {
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
}

export default IndexPage
