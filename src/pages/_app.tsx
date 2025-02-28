import React from "react"
import type { AppProps } from "next/app"

import "../styles/globals.css"
import FavouritesProvider from "../context/FavouritesProvider"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <FavouritesProvider>
      <Component {...pageProps} />
    </FavouritesProvider>
  )
}

export default MyApp
