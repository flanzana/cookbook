import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

import Favicon from "../components/Favicon"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="Žana Flander" />
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
