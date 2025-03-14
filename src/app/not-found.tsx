import { Metadata } from "next"

import TextLink from "../components/TextLink"
import Page from "../components/Page/Page"

export const metadata: Metadata = {
  title: "Not found | Žana's cookbook",
}

/**
 * Page for non-existing recipe.
 */
const RecipeNotFound = () => (
  <Page>
    <h1 className="mb-6 text-center text-3xl font-bold">Recipe not found</h1>
    <p className="text-center text-lg">
      Unfortunately, the recipe you are looking for does not exist.
    </p>
    <p className="text-center text-lg">
      Search through all available{" "}
      <TextLink href="/search" isUnderlined additionalClassName="px-0">
        recipes
      </TextLink>
      .
    </p>
  </Page>
)

export default RecipeNotFound
