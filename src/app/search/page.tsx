import type { Metadata } from "next"

import CategoryFilters from "../../components/CategoryFilters"
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
      <CategoryFilters />
      <RecipeCards />
    </Page>
  )
}

export default SearchPage
