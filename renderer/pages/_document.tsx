import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter'
import { Head, Html, Main, NextScript } from 'next/document'
// or `v1X-pagesRouter` if you are using Next.js v1X

export default function MyDocument(props) {
  return (
    <Html style={{ height: '100%' }}>
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body style={{ margin: 0, height: '100%' }}>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx)
  return finalProps
}
