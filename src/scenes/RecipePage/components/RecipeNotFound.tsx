import React from "react"

import TextLink from "../../../components/TextLink/TextLink"

/**
 * Page for non-existing recipe.
 */
const RecipeNotFound = () => (
  <>
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
  </>
)

export default RecipeNotFound
