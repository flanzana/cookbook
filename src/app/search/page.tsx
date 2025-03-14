import { Metadata } from "next"

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
    <Page hasFavouritesIcon>
      <RecipeCards />
    </Page>
  )
}

export default SearchPage
