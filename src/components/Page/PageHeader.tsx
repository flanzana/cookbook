import React from "react"
import Link from "next/link"

import Logo from "../Logo/Logo"

/**
 * Header for the pages with the logo and title.
 */
const PageHeader = () => (
  <header className="sticky top-0 flex w-full bg-white/70 backdrop-blur">
    <Link href="/" passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="flex flex-row items-center p-4 max-w-max	outline-none group">
        <Logo
          width="32"
          height="32"
          className="text-primary-600 group-hover:text-primary-300 group-focus:text-primary-300"
        />
        <span className="font-display text-xl font-medium ml-4">Žana&apos;s cookbook</span>
      </a>
    </Link>
  </header>
)

export default PageHeader
