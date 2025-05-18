import type { Metadata } from "next"
import { Suspense } from "react"
import CategoryFilters from "../../components/CategoryFilters"
import Loader from "../../components/Loader"
import Page from "../../components/Page/Page"
import RecipeCards from "./RecipeCards"

export const metadata: Metadata = {
  title: "Search | Žana's cookbook",
}

/**
 * Search page displaying all recipe cards.
 */
const SearchPage = () => {
  return (
    <Page hasFavouritesIcon hasFilters>
      <h1 className="sr-only">Recipes</h1>
      <Suspense fallback={null}>
        <CategoryFilters />
      </Suspense>
      <Suspense
        fallback={<Loader sizingClassNames="w-full h-[200px]" label="Loading recipe cards" />}
      >
        <RecipeCards />
      </Suspense>
    </Page>
  )
}

export default SearchPage
