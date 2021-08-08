import React from "react"
import Head from "next/head"

import PageHeader from "./PageHeader"
import PageFooter from "./PageFooter"

type Props = {
  meta: {
    title: string
    description?: string
  }
  children: React.ReactNode
  hasHeader?: boolean
  hasFooter?: boolean
}

/**
 * Structure of the Page with meta.
 *
 * @param meta - title and description of the page's meta tag
 * @param children - content of the page
 * @param hasHeader - if true, header is displayed. Default: true.
 * @param hasFooter - if true, footer is displayed. Default: true.
 */
const Page = ({ meta, children, hasHeader = true, hasFooter = true }: Props) => {
  const { title, description } = meta

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="min-h-screen flex flex-col">
        {hasHeader && <PageHeader />}
        <main className="font-body flex flex-1 flex-col px-6 py-3 md:px-10 md:py-5 lg:px-20 lg:py-10">
          {children}
        </main>
        {hasFooter && <PageFooter />}
      </div>
    </>
  )
}

export default Page
