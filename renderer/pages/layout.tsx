import Head from 'next/head'
import { useEffect } from 'react'

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Player</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default RootLayout
