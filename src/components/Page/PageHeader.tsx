import Link from "next/link"

import DarkModeButton from "../DarkModeButton"
import FavouriteIconButton from "../FavouriteIconButton"
import Logo from "../Logo"

type Props = {
  hasFavouritesIcon: boolean
}

/**
 * Header for the pages with the logo and title.
 */
const PageHeader = ({ hasFavouritesIcon }: Props) => (
  <header className="sticky top-0 z-20 flex w-full flex-row justify-between bg-white/70 backdrop-blur-sm dark:bg-zinc-800/70">
    <Link href="/" className="group flex max-w-max flex-row items-center p-4 outline-hidden">
      <>
        <Logo
          width="32"
          height="32"
          className="text-primary-600 group-hover:text-primary-300 group-focus:text-primary-300 dark:text-primary-300 dark:group-hover:text-primary-500 dark:group-focus:text-primary-500"
        />
        <span className="font-display ml-4 text-xl font-medium">Žana&apos;s cookbook</span>
      </>
    </Link>
    <div className="mr-4 flex flex-row items-center sm:space-x-4">
      {hasFavouritesIcon && <FavouriteIconButton />}
      <DarkModeButton />
    </div>
  </header>
)

export default PageHeader
