import React from "react"
import { ArrowRightIcon } from "@heroicons/react/solid"

import Page from "../../components/Page/Page"
import Logo from "../../components/Logo/Logo"
import Button from "../../components/Button/Button"

const HomePage = () => {
  return (
    <Page meta={{ title: "Žana's cookbook" }} hasHeader={false} hasFooter={false}>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <Logo width="100" height="100" className="mb-12 text-primary-600 dark:text-primary-300" />
        <h1 className="mb-20 font-display text-4xl font-medium sm:text-5xl md:text-6xl">
          Welcome to{" "}
          <span className="text-primary-600 dark:text-primary-300">Žana&apos;s cookbook</span>!
        </h1>

        <Button href="/search" size="large">
          <span className="flex flex-row items-center justify-center">
            Search the recipes <ArrowRightIcon className="ml-3 h-5 w-5" />
          </span>
        </Button>
      </div>
    </Page>
  )
}

export default HomePage
