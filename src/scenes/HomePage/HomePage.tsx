import React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/solid"

import Page from "../../components/Page/Page"
import Logo from "../../components/Logo/Logo"

const HomePage = () => {
  return (
    <Page meta={{ title: "Žana's cookbook" }} hasHeader={false} hasFooter={false}>
      <div className="flex flex-col flex-1 items-center justify-center text-center">
        <Logo width="100" height="100" className="text-primary-600 mb-12" />
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-20">
          Welcome to <span className="text-primary-600">Žana&apos;s cookbook</span>!
        </h1>

        <Link href="/search" passHref>
          <button
            type="button"
            className="px-8 md:px-12 py-3 bg-primary-600 rounded-3xl outline-none hover:bg-primary-700 focus:bg-primary-700 focus:ring-4 focus:ring-primary-300"
          >
            <span className="flex flex-row justify-center items-center text-white text-lg font-body">
              Search the recipes <ArrowRightIcon className="h-5 w-5 ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </Page>
  )
}

export default HomePage
