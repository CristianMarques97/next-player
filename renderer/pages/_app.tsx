import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import ConditionalRender from '../components/containers/conditional-render'
import FeedBackDialog, { DialogHandler } from '../components/dialogs/Feedback'
import i18nextConfig from '../i18next.config'
import AppFrame from '../layouts/app-bar'
import { defaultTheme } from '../themes'

export async function getStaticProps({ locale = 'pt-BR' }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18nextConfig)),
    },
  }
}

function Index(props) {
  const { Component, pageProps } = props
  const router = useRouter()
  const { t } = useTranslation(['common'])

  const isNotTray = () => router.pathname !== '/tray'

  const dialogRef = useRef<DialogHandler>()

  const initListeners = () => {
    // window.electron.receive('show-quit-modal', () => {
    //   if (dialogRef.current) {
    //     dialogRef.current.openDialog()
    //   }
    // })
  }

  useEffect(() => {
    if (isNotTray()) {
      initListeners()
    }
  }, [])

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <div style={{ height: '100vh' }}>
          <ConditionalRender show={isNotTray()}>
            <AppFrame />
            <FeedBackDialog
              ref={dialogRef}
              title={t('dialogs.logout.title')}
              message={t('dialogs.logout.message')}
              positiveButton={t('buttons.ok')}
              negativeButton={t('buttons.cancel')}
              onClick={(result) => {}}
            />
          </ConditionalRender>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </AppCacheProvider>
  )
}

export default appWithTranslation(Index)
