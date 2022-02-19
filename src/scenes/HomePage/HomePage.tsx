import React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/solid"

import Page from "../../components/Page/Page"
import Logo from "../../components/Logo/Logo"

const HomePage = () => {
  return (
    <Page meta={{ title: "Žana's cookbook" }} hasHeader={false} hasFooter={false}>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <Logo width="100" height="100" className="mb-12 text-primary-600 dark:text-primary-300" />
        <h1 className="mb-20 font-display text-4xl font-medium sm:text-5xl md:text-6xl">
          Welcome to{" "}
          <span className="text-primary-600 dark:text-primary-300">Žana&apos;s cookbook</span>!
        </h1>

        <Link href="/search" passHref>
          <button
            type="button"
            className="rounded-3xl bg-primary-600 px-8 py-3 outline-none hover:bg-primary-700 focus:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 md:px-12"
          >
            <span className="flex flex-row items-center justify-center font-body text-lg text-white dark:text-zinc-800">
              Search the recipes <ArrowRightIcon className="ml-3 h-5 w-5" />
            </span>
          </button>
        </Link>
      </div>
    </Page>
  )
}

export default HomePage
