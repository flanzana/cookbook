import type { Metadata } from "next"
import { Open_Sans, Poppins } from "next/font/google"
import type { ReactNode } from "react"

import "./globals.css"
import FavouritesProvider from "../context/FavouritesProvider"

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: "500",
  display: "swap",
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Žana's cookbook",
  description:
    "A cookbook of Žana's favourite recipes; from dips, soups to desserts. Recipes are written in English, Spanish or Slovenian language.",
  keywords: [
    "cookbook",
    "recipe",
    "recipes",
    "cooking",
    "cook",
    "food",
    "meal",
    "breakfast",
    "lunch",
    "dinner",
    "snack",
    "dip",
    "spread",
    "sauce",
    "soup",
    "stew",
    "pasta",
    "salad",
    "meat",
    "vegetarian",
    "dessert",
    "drink",
    "dough",
    "Slovenian food",
    "Spanish food",
    "international food",
  ],
  authors: { name: "Žana Flander" },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "mask-icon": "/favicon/safari-pinned-tab.svg",
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body>
        <FavouritesProvider>{children}</FavouritesProvider>
      </body>
    </html>
  )
}

export default RootLayout
