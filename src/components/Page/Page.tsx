import PageHeader from "./PageHeader"
import PageFooter from "./PageFooter"
import DarkModeButton from "../DarkModeButton"

type Props = {
  children: React.ReactNode
  hasHeader?: boolean
  hasFooter?: boolean
  hasFavouritesIcon?: boolean
}

/**
 * Structure of the Page with meta.
 *
 * @param children - content of the page
 * @param hasHeader - if true, header is displayed. Default: true.
 * @param hasFooter - if true, footer is displayed. Default: true.
 * @param hasFavouritesIcon - if true, favourites icon is displayed in the header. Default: false.
 */
const Page = ({
  children,
  hasHeader = true,
  hasFooter = true,
  hasFavouritesIcon = false,
}: Props) => {
  return (
    <div className="font-body flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
      {hasHeader ? (
        <PageHeader hasFavouritesIcon={hasFavouritesIcon} />
      ) : (
        <div className="m-4 flex flex-row-reverse">
          <DarkModeButton />
        </div>
      )}
      <main className="flex flex-1 flex-col p-3 md:px-10 md:py-5 lg:px-20 lg:py-10">
        {children}
      </main>
      {hasFooter && <PageFooter />}
    </div>
  )
}

export default Page
