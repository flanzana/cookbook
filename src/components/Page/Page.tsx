import React from "react"
import Head from "next/head"

import PageHeader from "./PageHeader"
import PageFooter from "./PageFooter"
import DarkModeButton from "../DarkModeButton/DarkModeButton"

const DEFAULT_DESCRIPTION =
  "A cookbook of Žana's favourite recipes; from dips, soups to desserts. Recipes are written in English, Spanish or Slovenian language."

type Props = {
  meta: {
    title: string
    description?: string
  }
  children: React.ReactNode
  hasHeader?: boolean
  hasFooter?: boolean
  hasFavouritesIcon?: boolean
}

/**
 * Structure of the Page with meta.
 *
 * @param meta - title and description of the page's meta tag
 * @param children - content of the page
 * @param hasHeader - if true, header is displayed. Default: true.
 * @param hasFooter - if true, footer is displayed. Default: true.
 * @param hasFavouritesIcon - if true, favourites icon is displayed in the header. Default: false.
 */
const Page = ({
  meta,
  children,
  hasHeader = true,
  hasFooter = true,
  hasFavouritesIcon = false,
}: Props) => {
  const { title, description } = meta

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || DEFAULT_DESCRIPTION} />
        <meta
          name="keywords"
          content="cookbook, recipe, recipes, cooking, cook, food, meal, breakfast, lunch, dinner, snack, dip, spread, sauce, soup, stew, pasta, salad, meat, vegetarian, dessert, drink, dough, Slovenian food, Spanish food, international food"
        />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
        {hasHeader ? (
          <PageHeader hasFavouritesIcon={hasFavouritesIcon} />
        ) : (
          <div className="m-4 flex flex-row-reverse">
            <DarkModeButton />
          </div>
        )}
        <main className="flex flex-1 flex-col p-3 font-body md:px-10 md:py-5 lg:px-20 lg:py-10">
          {children}
        </main>
        {hasFooter && <PageFooter />}
      </div>
    </>
  )
}

export default Page
