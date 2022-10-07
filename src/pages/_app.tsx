import React from "react"
import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"

import FavouritesProvider from "../context/FavouritesProvider"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <FavouritesProvider>
      <Component {...pageProps} />
    </FavouritesProvider>
  )
}

export default MyApp
