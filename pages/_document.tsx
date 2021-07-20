import colors from '@centralstandard/colors'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          <meta name="description" content="The personal website of Jeremy Boles" />
          <meta name="theme-color" content={colors.warmGray[700]} />
          <link rel="manifest" href="/manifest.json" />

          <meta name="author" content="Jeremy Boles" />
          <link rel="me" href="mailto:me@jeremyboles.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
